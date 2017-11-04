const loader = require("./speaker-loader.js");
const schema = require("../content/schema.json");

console.log(loader(JSON.stringify(schema)));
