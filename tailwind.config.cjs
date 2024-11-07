/** @type {import('tailwindcss').Config} */
export default {
  content: [],
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
    },
  },
  plugins: [],
}
