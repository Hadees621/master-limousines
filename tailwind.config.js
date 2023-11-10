/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary_600: ["var(--font-montserrat-600)"],
        primary_500: ["var(--font-montserrat-500)"],
        primary_400: ["var(--font-montserrat-400)"],
      },
      colors: {
        crimson: "#A72211",
        active_navbar: "#2189B7",
      },
      screens: {
        xxlg: "1500px",
        xxs: "400px",
      },
     
    },
  },
  plugins: [],
};
