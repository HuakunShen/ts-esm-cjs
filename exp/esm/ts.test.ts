/**
 * * Run this file with "ts-node-esm ts.ts"
 * ! for some unknown reason, this test will fail, the cjs version is always returned in test environment
 * ! ts-node-esm ts.ts will give the mjs version, not sure why
 * import ts library in a typescript file within an ESM package
 * For TypeScript to work in an ESM package, have to set the following in tsconfig.json
 * "module": "es2022"
 * "moduleResolution": "node"
 */
import indexCJS from "ts-cjs";
import coreCJS from "ts-cjs/core";
import indexESM from "ts-esm";
import coreESM from "ts-esm/core";

it("import typescript library", () => {
  expect(indexCJS).toBe("ts-cjs-index (mjs version)");
  expect(coreCJS).toBe("ts-cjs-core (mjs version)");
  expect(indexESM).toBe("ts-esm-index (mjs version)");
  expect(coreESM).toBe("ts-esm-core (mjs version)");
});
