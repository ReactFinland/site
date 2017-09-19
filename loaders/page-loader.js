const _path = require("path");
const _ = require("lodash");
const frontmatter = require("front-matter");
const loaderUtils = require("loader-utils");
const removeMarkdown = require("remove-markdown");
const { markdown, highlight, parse } = require("@survivejs/utils");
const headers = require("./headers");

module.exports = function pageLoader(source) {
  const result = frontmatter(source);

  const { title, body } = parse.title(result.body);

  result.attributes = result.attributes || {};

  if (!result.attributes.title) {
    result.attributes.title = title;
  }

  result.attributes = _.merge(
    result.attributes,
    parse.header(headers, this.resourcePath)
  );

  result.preview = generatePreview(result, body);
  result.description = generateDescription(result);
  result.keywords = generateKeywords(result);
  result.body = markdown(customizeMarkdown).process(body, highlight);

  delete result.frontmatter;

  if (result.attributes.headerImage) {
    result.attributes.headerImage = `__IMG_START__${result.attributes
      .headerImage}__IMG_END__`;
  }

  const context = this;
  const resolve = resolveAliases(context.resource);

  return `module.exports = ${JSON.stringify(
    result
  )};`.replace(/__IMG_START__([^,\]>]+)__IMG_END__/g, (match, src) => {
    if (_.startsWith(src, "http")) {
      return src;
    }

    return `" + require(${loaderUtils.stringifyRequest(
      context,
      resolve(src)
    )}) + "`;
  });
};

function customizeMarkdown(renderer) {
  // XXXXX: This gets executed for all content. It would be better to constrain
  // per book somehow.
  renderer.em = function em(text) {
    const webpackBook = require("./webpack-book");

    // Perform a lookup against webpack book chapter definition to figure
    // out whether to link or not
    const match = webpackBook()[text];

    return match ? `<a href="${match.url}">${text}</a>` : `<em>${text}</em>`;
  };
}

function resolveAliases(resource) {
  const relativePath = _path.relative(process.cwd(), resource);

  return src => {
    if (!src.startsWith("images")) {
      return src;
    }

    if (relativePath.startsWith("books/react-book")) {
      return `books/react-book/manuscript/${src}`;
    }

    if (relativePath.startsWith("books/webpack-book")) {
      return `books/webpack-book/manuscript/${src}`;
    }

    return src;
  };
}

function generatePreview(file, body) {
  let ret = body;

  if (file.attributes && file.attributes.preview) {
    ret = file.attributes.preview;
  }

  return `${removeMarkdown(ret).slice(0, 100)}…`;
}

function generateDescription(file) {
  if (file.attributes) {
    return file.attributes.description || file.attributes.preview;
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
