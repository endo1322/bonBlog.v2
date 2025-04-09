/// <reference types="vitest" />
import path from 'node:path';
import react from "@vitejs/plugin-react-swc";
import { tsImport } from 'tsx/esm/api';
import { defineConfig, mergeConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths'

const uiConfig = await tsImport('@bonblogv2/ui/vite.config', import.meta.url);

export default mergeConfig(
  uiConfig.default, 
  defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
      globals: true,
      setupFiles: ['./src/tests/vitest.setup.ts'],
      environment: "jsdom",
    },
  })
)