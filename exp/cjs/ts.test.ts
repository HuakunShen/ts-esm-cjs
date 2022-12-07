/**
 * * Run this file with "npx jest ts.test.ts"
 * import ts library in a typescript file within an Commonjs package
 * Since this file is in a commonjs package, it always import the cjs file
 */
import indexCJS from "ts-cjs";
import coreCJS from "ts-cjs/core";
import indexESM from "ts-esm";
import coreESM from "ts-esm/core";

it("test import", () => {
  expect(indexCJS).toBe("ts-cjs-index (cjs version)");
  expect(coreCJS).toBe("ts-cjs-core (cjs version)");
  expect(indexESM).toBe("ts-esm-index (cjs version)");
  expect(coreESM).toBe("ts-esm-core (cjs version)");
});
