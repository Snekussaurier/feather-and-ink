/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'background': '#121212;',
      'background-dark': '#000000',
      'current-line': '#44475a',
      'foreground': '#f8f8f2',
      'comment': '#6272a4',
      'cyan': '#8be9fd',
      'green': '#8AFF80',
      'orange': '#ffb86c',
      'pink': '#ff79c6',
      'purple': '#bd93f9',
      'red': '#ff5555',
      'yellow': '#f1fa8c',
    },
  },
  plugins: [],
}
