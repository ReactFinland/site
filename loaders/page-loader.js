const _ = require("lodash");
const marked = require("marked");
const frontmatter = require("front-matter");
const loaderUtils = require("loader-utils");
const removeMarkdown = require("remove-markdown");

module.exports = function pageLoader(source) {
  const result = frontmatter(source);

  const { title, body } = parseTitle(result.body); // XXX: Simplify?

  result.attributes = result.attributes || {};
  result.title = title || result.attributes.title;
  result.preview = generatePreview(result, body);
  result.description = generateDescription(result);
  result.keywords = generateKeywords(result);
  result.body = markdown().process(body); //, highlight);

  delete result.frontmatter;

  if (result.attributes.headerImage) {
    result.attributes.headerImage = `__IMG_START__${result.attributes.headerImage}__IMG_END__`;
  }

  return `module.exports = ${JSON.stringify(result)};`.replace(
    /__IMG_START__([^,\]>]+)__IMG_END__/g,
    (match, src) => {
      if (_.startsWith(src, "http")) {
        return src;
      }

      return `" + require(${loaderUtils.stringifyRequest(this, src)}) + "`;
    }
  );
};

function generatePreview(file, body) {
  let ret = body;

  if (file.attributes && file.attributes.preview) {
    ret = file.attributes.preview;
  }

  return `${removeMarkdown(ret).slice(0, 100)}…`;
}

function generateDescription(file) {
  if (file.attributes) {
    return (
      file.attributes.description || file.attributes.preview || file.preview
    );
  }

  return file.preview;
}

function generateKeywords(file) {
  let keywords = [];

  if (file.attributes && file.attributes.keywords) {
    keywords = file.attributes.keywords;
  }

  if (_.isString(keywords)) {
    return keywords.split(",");
  }

  return keywords;
}

function markdown() {
  const renderer = new marked.Renderer();

  renderer.image = function image(href, title, text) {
    const textParts = text ? text.split("|") : [];
    const alt = textParts[0] || "";
    const description = markdown().process(alt);
    const width = textParts[1] || "";
    const height = textParts[2] || "";
    const className = textParts[3] || "";

    return `<figure><img src="__IMG_START__${href}__IMG_END__" alt="${alt}" class="image ${className}" width="${width}" height="${height}" /><figcaption>${description}</figcaption></figure>`;
  };

  // patch ids (this.options.headerPrefix can be undefined!)
  renderer.heading = function heading(text, level, raw) {
    const id = raw
      .toLowerCase()
      .replace(/`/g, "")
      .replace(/[^\w]+/g, "-");

    return (
      `<h${level} class="heading">` +
      `<a class="heading-anchor" href="#${id}" id="${id}"></a>` +
      `<span class="text">${text}</span>` +
      `<a class="heading-anchor-select" href="#${id}">#</a>` +
      `</h${level}>\n`
    );
  };

  renderer.paragraph = function paragraph(text) {
    // Skip pagebreaks
    if (text === "{pagebreak}") {
      return "";
    }

    return `<p>${text}</p>\n`;
  };

  return {
    process(content, highlight) {
      const markedDefaults = {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        sanitizer: null,
        mangle: true,
        smartLists: false,
        silent: false,
        highlight: highlight || false,
        langPrefix: "lang-",
        smartypants: false,
        headerPrefix: "",
        renderer,
        xhtml: false,
      };

      return marked.parser(parseQuotes(content), markedDefaults);
    },

    // Note that this should correspond with renderer.heading
    getAnchors(content) {
      return marked
        .lexer(content)
        .filter(chunk => chunk.type === "heading")
        .map(chunk => ({
          title: chunk.text.replace(/`/g, ""),
          id: chunk.text
            .toLowerCase()
            .replace(/`/g, "")
            .replace(/[^\w]+/g, "-"),
        }));
    },
  };
}

function parseQuotes(data) {
  const tokens = marked.lexer(data).map(t => {
    if (t.type === "paragraph") {
      return (
        parseCustomQuote(t, "T>", "tip") ||
        parseCustomQuote(t, "W>", "warning") ||
        t
      );
    }

    return t;
  });
  tokens.links = [];

  return tokens;
}

function parseCustomQuote(token, match, className) {
  if (token.type === "paragraph") {
    const text = token.text;

    if (text.indexOf(match) === 0) {
      const icon =
        className === "tip" ? "icon-attention-circled" : "icon-attention";

      return {
        type: "html",
        text: `<blockquote class="${className}"><i class="${icon}"></i>${text
          .slice(2)
          .trim()}</blockquote>`,
      };
    }
  }

  return null;
}

function parseTitle(body) {
  const lines = body.split("\n");

  if (lines[0].indexOf("#") === 0 && lines[0][1] === " ") {
    return {
      title: removeMarkdown(lines[0]),
      body: lines.slice(1).join("\n"),
    };
  }

  if (lines[0].indexOf("-#") === 0) {
    return {
      title: removeMarkdown(lines[0].slice(2).trim()),
      body: lines.slice(1).join("\n"),
    };
  }

  return { body };
}
