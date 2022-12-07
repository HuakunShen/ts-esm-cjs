// import from typescript cjs only library
const index = require("js-cjs");
console.log(index);
const core = require("js-cjs/core");
console.log(core);

// import from typescript esm library
(async function () {
  const module = await import("js-esm");
  console.log(module.default);
  const core = await import("js-esm/core");
  console.log(core.default);
})();
