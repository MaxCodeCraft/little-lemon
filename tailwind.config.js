const { default: daisyui } = require("daisyui");

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
        primaryGreen: "#495E57",
        primaryYellow: "#F4CE14",
        secondarySoftCoral: "#EE9972",
        secondaryLightPeach: "#FBDABB",
        highlightLight: "#EDEFEE",
        highlightDark: "#333333",
      },
      fontFamily: {
        markazi: ["var(--font-markazi)", "serif"],
        karla: ["var(--font-karla)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
