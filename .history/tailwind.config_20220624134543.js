/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1.20rem",
        sm: "1.20rem",
        lg: "4.5rem",
        // xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {
      colors: {
        body: "#17171F",
        selectedText: "#A3A3FF",
        theme: "#3F3FFF",
        nav: "#404053",
        secondary: "#1919A4",
        badge: "#3F3F51",
        input_border: "#565666",
        input: "#2A2A35",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "768px",
          },
          "@screen md": {
            maxWidth: "992px",
          },
          "@screen lg": {
            maxWidth: "1536px",
          },
          "@screen xl": {
            maxWidth: "1800px",
          },
        },
      });
    },
  ],
};
