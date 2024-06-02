/* eslint-disable @typescript-eslint/no-var-requires */
import { createRequire } from "module";
import plugin from "tailwindcss";
const require = createRequire(import.meta.url);
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "--color-primary": "#6741d9",
        "--color-primary-light": "#7950f2",
        "--color-primary-dark": "#4c2c92",
        "--color-custom-purple": "#4c2c92",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
});
