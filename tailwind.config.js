/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',

        'main-bg': 'var(--main-bg)',
        'toggle-bg': 'var(--toggle-bg)',
        'screen-bg': 'var(--screen-bg)',

        'key-bg-1': 'var(--key-bg-1)',
        'key-shadow-1': 'var(--key-shadow-1)',
        'key-hover-1': 'var(--key-hover-1)',

        'key-bg-2': 'var(--key-bg-2)',
        'key-shadow-2': 'var(--key-shadow-2)',
        'key-hover-2': 'var(--key-hover-2)',

        'key-bg-3': 'var(--key-bg-3)',
        'key-shadow-3': 'var(--key-shadow-3)',
        'key-hover-3': 'var(--key-hover-3)',

        key: 'var(--key)',
      },
    },
  },
  plugins: [],
}
