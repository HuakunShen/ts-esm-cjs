/**
 * We are in a commonjs package and trying to import from typescript library.
 * we have 2 typescript libraries, ts-cjs and ts-esm. One commonjs and one ESM.
 * Since both typescript library produce both cjs and esm, there are 2 ways to import them in commonjs package.
 * regular import will import the ESM module
 * dynamic import will import the CJS module
 */
(async function () {
  // import from typescript cjs only library
  const index1 = require("ts-cjs");
  console.log(index1);
  const core1 = require("ts-cjs/core");
  console.log(core1);

  // import from typescript cjs library
  const index2 = require("ts-cjs");
  console.log(index2);
  const core2 = require("ts-cjs/core");
  console.log(core2);

  // dynamic import ts-cjs
  const index3 = await import("ts-cjs");
  console.log(index3.default);
  const core3 = await import("ts-cjs/core");
  console.log(core3.default);

  // import from typescript esm library
  const index4 = require("ts-esm");
  console.log(index4);
  const core4 = require("ts-esm/core");
  console.log(core4);

  // dynamic import ts-esm
  const index5 = await import("ts-esm");
  console.log(index5.default);
  const core5 = await import("ts-esm/core");
  console.log(core5.default);
})();
