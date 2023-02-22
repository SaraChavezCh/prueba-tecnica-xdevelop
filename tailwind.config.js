
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT( {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-custom-color": "#fffff",
      },
      screens: {
        xs: "375px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
});
