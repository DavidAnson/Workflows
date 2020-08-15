// @ts-check

"use strict";

const assert = require("assert");
const markdownlint = require("markdownlint");

const readme = "../README.md";
const results = markdownlint.sync({
  "files": [ readme ],
  "resultVersion": 3
});
assert.equal(results[readme].length, 0);
