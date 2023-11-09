/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans'],
        archivo: ['Archivo', 'sans'],
        librebaskerville: ['LibreBaskerville', 'serif'],
        leaguespartan: ['League Spartan', 'sans'],
      },
      screens: {
        '1024': '1024px',
        '2xl': '2560px',
      },
    },
  },
  plugins: [],
}
