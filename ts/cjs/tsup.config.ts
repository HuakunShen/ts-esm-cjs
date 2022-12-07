import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "index.ts",
    core: "core.ts",
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  treeshake: true,
});