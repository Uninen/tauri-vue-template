const resolve = require('path').resolve
// const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [resolve(__dirname, 'index.html'), resolve(__dirname, 'src/**/*.{vue,ts}')],
  // theme: {
  //   extend: {
  //     // here's how to extend fonts if needed
  //     fontFamily: {
  //       sans: [...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
}
