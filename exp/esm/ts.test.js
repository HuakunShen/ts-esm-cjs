/**
 * import typescript library
 * Run: NODE_OPTIONS=--experimental-vm-modules npx jest ts.test.js
 *
 * Since this is a commonjs package, will always import mjs version of the typescript libraries
 */

import indexJsCJS from "ts-cjs";
import coreJsCJS from "ts-cjs/core";
import indexJsESM from "ts-esm";
import coreJsESM from "ts-esm/core";

it("import typescript library", () => {
  expect(indexJsCJS).toBe("ts-cjs-index (mjs version)");
  expect(coreJsCJS).toBe("ts-cjs-core (mjs version)");
  expect(indexJsESM).toBe("ts-esm-index (mjs version)");
  expect(coreJsESM).toBe("ts-esm-core (mjs version)");
});
