const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#242333",
        turquoise: "#56D8F2",
        light: "#F7F7F7",
      },
      width: {
        normal: "1200px",
        "700px": "700px",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      raleway: ["Raleway"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
