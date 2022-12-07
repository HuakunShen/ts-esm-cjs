# esm-cjs

> Nodejs module system is a mess as of 2022. I had a lot of trouble dealing with Commonjs and ESM modules, especially when TypeScript is also in the game.
> TypeScript and testing framework Jest don't support some latest features of nodejs, or using experimental features.
> That's why I built this repo to show how CommonJS and ESM modules can work together using both JavaScript and TypeScript.
>
> I also used multi-entry exports in `package.json` in all libraries. You may learn how to build it.

## FYI

Software Versions

- Nodejs: v18.12.0
- `ts-node`: v10.9.1
- Date: December 2022

Hopefully when you are reading this, the mess with nodejs and TypeScript is no longer an issue.

---

Read [CommonJS (cjs) and Modules (esm): Import compatibility](https://adamcoster.com/blog/commonjs-and-esm-importexport-compatibility-examples)

The purpose of this repo is to show how to use esm and commonjs module

- how to import cjs from esm
- how to import esm from cjs
- how to import esm from esm
- how to import cjs from cjs

`js` and `ts` fodlers contains some libraries.

The `ts` libraries are compiled into both CommonJS and ESM.

The folder name tells which type of module it is.

`exp` folder contains 2 packages, cjs and esm, with both `.js` and `.ts` files, demonstrating how to import from different locations and which version (`.cjs` or `.mjs`) is imported.

For example:

- import cjs from javascript cjs library within a cjs package
- import mjs from typescript cjs library within a esm package
- ...

For the typescript libraries, both `.cjs` and `.mjs` were produced. I manually altered the produced file to indicate whether it's a `cjs` or a `mjs` file. e.g. [./ts/esm/dist/core.cjs](./ts/esm/dist/core.cjs).

The purpose is to read these variables and print them out so we know which version is imported.

Read their `package.json` to learn how they are exported. I used multi-entry exports in all libraries.

Demos are written as unittests so you can see the expected output.
Tests were written with `jest`. Each `*.test.js` or `*.test.ts` file has instructions of how to run them in each test file.
Some of them requires `NODE_OPTIONS=--experimental-vm-modules` to activate ESM. Read more [here](https://jestjs.io/docs/ecmascript-modules).

## Bug

There is still a bug I couldn't fix for now. [./exp/esm/ts.test.ts](./exp/esm/ts.test.ts) is in an ESM module and is supposed to import the `mjs` version of typescript libraries, and we can see expected outputs when running a `.ts` file ([./exp/esm/ts.ts](./exp/esm/ts.ts)) and print the variables out directly.

But when I run jest test on [./exp/esm/ts.test.ts](./exp/esm/ts.test.ts), `.cjs` is always imported. Not sure why this happens, but you get the idea by running `ts-node-esm ./exp/esm/ts.ts`.
