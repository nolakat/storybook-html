import "../src/styles/tailwind.css";
import { themes } from '@storybook/theming';



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' }
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F9F9F9',
      },
      {
        name: 'dark',
        value: '#333',
      },
    ]
  }
}
