/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const palette = require('./pallete')
const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = defaultTheme.fontFamily
fontFamily['sans'] = ['RobotoRegular']

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily,
    extend: {
      colors: palette,
      fontFamily: {
        regular: ['RobotoRegular'],
        medium: ['RobotoMedium'],
        bold: ['RobotoBold'],
        black: ['RobotoBlack'],
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      }
    }
  },
  plugins: []
}
