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

  context.speaker.firstName = context.speaker.name.split(" ")[0];

  return template(context);
};
