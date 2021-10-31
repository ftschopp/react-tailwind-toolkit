module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
