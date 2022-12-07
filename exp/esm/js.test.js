/**
 * Run this file: NODE_OPTIONS=--experimental-vm-modules npx jest js.test.js
 */

import indexJsCJS from "js-cjs";
import coreJsCJS from "js-cjs/core";
import indexJsESM from "js-esm";
import coreJsESM from "js-esm/core";

it("import cjs lib", () => {
  expect(indexJsCJS).toBe("js-cjs-index");
  expect(coreJsCJS).toBe("js-cjs-core");
});

it("import esm lib", () => {
  expect(indexJsESM).toBe("js-esm-index");
  expect(coreJsESM).toBe("js-esm-core");
});
