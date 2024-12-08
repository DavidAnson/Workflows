// @ts-check

import assert from "assert";
import { lint } from "markdownlint/promise";

const readme = "../README.md";
const results = await lint({
  "files": [ readme ]
});
assert.equal(results[readme].length, 0);
