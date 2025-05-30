import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "node:path";


/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ['@storybook/addon-essentials', 'storybook-addon-remix-react-router@4'],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
