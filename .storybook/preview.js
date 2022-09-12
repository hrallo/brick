import '../src/styles/paver.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: {
      rules: [],
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Styles', 'Components'],
    },
  },
}
