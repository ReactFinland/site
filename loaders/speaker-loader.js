const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const template = ejs.compile(
  fs.readFileSync(path.join(__dirname, "../templates/speaker.ejs"), {
    encoding: "utf8",
  })
);

module.exports = function speakerLoader(source) {
  const context = JSON.parse(source);

  // Normalize to an array so it's easier to work with
  context.speakers = context.speakers || [context.speaker];

  // Inject first names
  context.speakers = context.speakers.map(speaker => {
    speaker.firstName = speaker.name.split(" ")[0];

    return speaker;
  });

  return template(context);
};
