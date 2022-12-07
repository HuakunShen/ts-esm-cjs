/**
 * Run this file with: NODE_OPTIONS=--experimental-vm-modules npx jest ts.test.js
 * 
 * We are in a commonjs package and trying to import from typescript library.
 * we have 2 typescript libraries, ts-cjs and ts-esm. One commonjs and one ESM.
 * Since both typescript library produce both cjs and esm, there are 2 ways to import them in commonjs package.
 * regular import will import the ESM module
 * dynamic import will import the CJS module
 */

it("import cjs from ts-cjs", () => {
  const index = require("ts-cjs");
  expect(index).toBe("ts-cjs-index (cjs version)");
  const core = require("ts-cjs/core");
  expect(core).toBe("ts-cjs-core (cjs version)");
});

it("import cjs from ts-esm ", () => {
  const index = require("ts-esm");
  expect(index).toBe("ts-esm-index (cjs version)");
  const core = require("ts-esm/core");
  expect(core).toBe("ts-esm-core (cjs version)");
});

it("import mjs from ts-cjs", async () => {
  const index = await import("ts-cjs");
  expect(index.default).toBe("ts-cjs-index (mjs version)");
  const core = await import("ts-cjs/core");
  expect(core.default).toBe("ts-cjs-core (mjs version)");
});

it("import mjs from ts-esm", async () => {
  const index = await import("ts-esm");
  expect(index.default).toBe("ts-esm-index (mjs version)");
  const core = await import("ts-esm/core");
  expect(core.default).toBe("ts-esm-core (mjs version)");
});
