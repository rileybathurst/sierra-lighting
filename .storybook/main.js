module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "storybook-addon-gatsby", // TODO: this was causing update bugs and I dont know if Im really using it
    '@storybook/preset-scss',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}