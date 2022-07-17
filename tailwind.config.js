module.exports = {
  content: ['**/components/**/*.{js,ts,jsx,tsx}', '**/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        /**
         * As the correct way to set a two-word font-family name is by wrapping it inside
         * quotes, we need to do the same in order for the browser to recognize it.
         */
        sans: ['Helvetica', 'sans-serif'],
        serif: ['Helvetica', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent-color': 'var(--accent-color)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
      },
      textColor: {
        'base': 'var(--text-base)',
        'primary': 'var(--text-primary)',
        'secondary': 'var(--text-secondary)',
        'accent-1': 'var(--text-accent-1)',
        'accent-2': 'var(--text-accent-2)',
        'accent-color': 'var(--text-accent-color)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--secondary)',
        'magical':
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
      gridTemplateColumns: {
        collapse: 'auto 1fr',
      },
    },
  },
  plugins: [],
};
