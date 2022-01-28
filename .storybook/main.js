module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    }
  ],
  "framework": "@storybook/html",
  // 👇 Retrieve the current environment from the configType argument
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        vue: {
          title: 'Vue Storybook - Dev',
          url: 'http://localhost:7007',
        },
        react: {
          title: 'Vue Storybook - Dev',
          url: 'http://localhost:6006',
        }
      };
    }
    return {
      html: {
        title: 'HTML',
        url: ''
      },
      vue: {
        title: 'Vue- Prod',
        url: 'https://sb-test-vue.netlify.app',
      },
      react: {
        title: 'React',
        url: 'https://sb-test-react.netlify.app',
      }
    };
  }
}
