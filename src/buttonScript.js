const path = require("path");
const docgen = require("vue-docgen-api");

const button = path.join(__dirname, "./Button.vue");

async function test() {
  const docButton = await docgen.parse(button);
  console.log(docButton);
}

test();
