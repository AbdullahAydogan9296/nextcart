/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        bodyText: '#A8A8A8',
        vibrantColor: '#0EA5E9',
        borderColor: '#E5E7EB',
        defaultBg: '#FFFFFF',
        grayBg: '#F8F9FB',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        gradientRadial: 'radial-gradient(var(--tw-gradient-stops))',
        gradientConic: 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
