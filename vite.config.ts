import { defineConfig } from "vite";
import { existsSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";

const rootDir = fileURLToPath(new URL("./", import.meta.url));
const clientSrcDir = fileURLToPath(new URL("./client/src", import.meta.url));
const aliasBase = existsSync(clientSrcDir) ? clientSrcDir : rootDir;

export default defineConfig({
  resolve: {
    alias: {
      "@": aliasBase,
      "@/": `${aliasBase}/`,
    },
  },
});
