/**
 * Run this file with: NODE_OPTIONS=--experimental-vm-modules npx jest js.test.js
 */

it("js cjs library", () => {
  const index = require("js-cjs");
  expect(index).toBe("js-cjs-index");
  const core = require("js-cjs/core");
  expect(core).toBe("js-cjs-core");
});

it("js esm library", async () => {
  const index = await import("js-esm");
  expect(index.default).toBe("js-esm-index");
  const core = await import("js-esm/core");
  expect(core.default).toBe("js-esm-core");
});
