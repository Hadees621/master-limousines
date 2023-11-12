/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#A72211",
        active_navbar: "#2189B7",
      },
      screens: {
        "3xxlg": "1928px",
        "2xxlg": "1700px",
        xxlg: "1500px",
        slg: "1000px",
        lgMd: "900px",
        smMd: "840px",
        xs: "500px",
        xxs: "400px",
        "2xxsl": "300px",
      },
    },
  },
  plugins: [],
};
