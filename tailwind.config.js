/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'small': '1221px',
      // => @media (min-width: 1189px) { ... }
    },
    extend: {
      transitionProperty: {
        'position': 'left',
        'spacing': 'margin, padding',
      },
      gridTemplateColumns: {
        // simple 3 column grid
        'dashboard': 'repeat(auto-fit, 270px)',
      },
      backgroundImage: {
        'landscape': "linear-gradient(to right, rgba(14, 15, 33, 0), rgba(14, 15, 33, 0.75)), url('../src/res/background-illustration-1.jpg')",
        'dashboard': "linear-gradient(to bottom, rgba(25, 27, 49, 0.1), rgba(25, 27, 49, 1)), url('../src/res/background-illustration-3.jpg')",
      },
    },
    colors: {
      transparent: 'transparent',
      'background': '#191B31;',
      'background-dark': '#13152C',
      'background-very-dark': '#0E0F21',
      'background-hover': '#16182E',
      'current-line': '#22253F',
      'foreground': '#f8f8f2',
      'foreground-highlight': '#F5F3C2',
      'comment': '#6272a4',
      'cyan': '#9cdcff',
      'green': '#d9ffe1',
      'orange': '#ffb86c',
      'pink': '#ec56a7',
      'rose': '#f4c7ff',
      'purple': '#9773ff',
      'red': '#ff7878',
      'yellow': '#f1fa8c',
    },
  },
  plugins: [],
}
