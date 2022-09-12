const path = require('path')

module.exports = {
  stories: [
    '../src/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: {
    reactDocgen: false,
  },
  images: {
    domains: ['source.unsplash.com'],
  },
}
