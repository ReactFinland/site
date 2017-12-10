const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const template = ejs.compile(
  fs.readFileSync(path.join(__dirname, "../templates/speaker.ejs"), {
    encoding: "utf8",
  })
);

module.exports = function speakerLoader(source) {
  // Resolve possible $ref's against other resources. Flat for now
  const context = resolveObjectRefs(JSON.parse(source));

  // Normalize to an array so it's easier to work with
  context.speakers = context.speakers || [context.speaker];

  // Inject first names
  context.speakers = context.speakers.map(speaker => {
    speaker.firstName = speaker && speaker.name.split(" ")[0];

    return speaker;
  });

  return template(context);
};

function resolveObjectRefs(context) {
  const ret = {};

  Object.keys(context).forEach(k => {
    v = context[k];

    if (Array.isArray(v)) {
      ret[k] = resolveArrayRefs(v);
    } else {
      ret[k] = v.$ref ? resolveRef(v.$ref) : v;
    }
  });

  return ret;
}

function resolveArrayRefs(array) {
  return array.map(v => (v.$ref ? resolveRef(v.$ref) : v));
}

function resolveRef(ref) {
  // Support only paths for now.
  // XXX: The lookup is hacky.
  return require(path.resolve(__dirname, "..", "content", ref));
}
