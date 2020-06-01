const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        'plum': '#fb6484',
        'blurple': '#312783',
        'darky': '#2f2f41',
        'light-gray': '#d8d8d8',
        'lighter-gray': '#9B9B9B',
        'yellowy': '#E5D151',
        'pinkish': '#E71EA3',
        'greeny': '#027540',
        'reddy': '#DC6660',
        'purply': '#A260DC',
        'wine': '#750202',
        'wine-light': '#ba7f80',
        'light-greeny': '#DBFFC1',
        'light-blurple': '#DFD8FF'
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}