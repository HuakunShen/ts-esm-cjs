/**
 * * Run this file with "ts-node-esm ts.ts"
 * import ts library in a typescript file within an Commonjs package
 */
import indexCJS from "ts-cjs";
console.log(indexCJS);

import coreCJS from "ts-cjs/core";
console.log(coreCJS);

import indexESM from "ts-esm";
console.log(indexESM);

import coreESM from "ts-esm/core";
console.log(coreESM);
