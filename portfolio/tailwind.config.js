/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'title':['"roboto"', "sans-serif"],
      'subtitle':['"Tilt Warp"', "sans-serif"],
      'Subbody':['"Workbench"'],
      'body':['"caveat"'],
    },
    extend: {},
  },
  plugins: [],
}

