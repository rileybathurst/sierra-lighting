import type { StorybookConfig } from "@storybook/react-webpack5";

import path from "path";
import { fileURLToPath } from "url";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {
      fsCache: true,
      lazyCompilation: true,
    },
  },

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],

  docs: {},

  typescript: {
    check: false,
    checkOptions: {},
    skipCompiler: false,

    reactDocgen: "react-docgen-typescript",
    // Provide your own options if necessary.
    // See https://storybook.js.org/docs/configure/typescript for more information.
    reactDocgenTypescriptOptions: {},
  },

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
      config.resolve.alias = {
        ...config.resolve.alias,
        gatsby: path.resolve(__dirname, "__mocks__/gatsby.js"),
      };
    }
    return config;
  },
};
export default config;
