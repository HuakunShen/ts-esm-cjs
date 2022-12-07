/**
 * * Run this file with "ts-node-esm ts.ts"
 * 
 * import ts library in a typescript file within an ESM package
 * For TypeScript to work in an ESM package, have to set the following in tsconfig.json
 * "module": "es2022"
 * "moduleResolution": "node"
 */

import indexCJS from "ts-cjs";
console.log(indexCJS);
// "ts-cjs-index (mjs version)"

import coreCJS from "ts-cjs/core";
console.log(coreCJS);
// "ts-cjs-core (mjs version)"

import indexESM from "ts-esm";
console.log(indexESM);
// "ts-esm-index (mjs version)"

import coreESM from "ts-esm/core";
console.log(coreESM);
// "ts-esm-core (mjs version)"
