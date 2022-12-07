/**
 * import ts library in a typescript file within an ESM package
 * For TypeScript to work in an ESM package, have to set the following in tsconfig.json
 * "module": "es2022"
 * "moduleResolution": "node"
 */

import indexCJS from "ts-cjs";
console.log(indexCJS);

import coreCJS from "ts-cjs/core";
console.log(coreCJS);

import indexESM from "ts-esm";
console.log(indexESM);

import coreESM from "ts-esm/core";
console.log(coreESM);
