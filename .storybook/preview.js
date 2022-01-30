import "../src/styles/tailwind.css";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
