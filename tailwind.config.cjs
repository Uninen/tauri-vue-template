const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    fontFamily: {
      sans: [
        // Windows
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        // macOS
        'system-ui',
        // Linux
        'Ubuntu',
        'Cantarell',
        'Noto Sans',
        // Fallbacks
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        // Emoji fonts
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: [
        // Windows
        'Cascadia Code',
        'Consolas',
        // macOS
        'Menlo',
        // Linux
        'Ubuntu Mono',
        'DejaVu Sans Mono',
        // Fallbacks
        'Courier New',
        'monospace',
      ],
      serif: [...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(['mdi']),
    }),
  ],
}
