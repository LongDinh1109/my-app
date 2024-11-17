/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this to include all components
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "480px", // Extra small screens
        "3xl": "1600px", // Ultra-wide screens
        "4xl": "1920px", // High-res displays
      },
      fontSize: {
        base: ["16px", { lineHeight: "24px" }],
        sm: ["14px", { lineHeight: "20px" }],
      },
      fontWeight: {
        medium: 500,
        regular: 400,
      },
      colors: {
        primary: {
          50:"#F5F6FF",
          500: "#565ADD",
        },
      },
    },
  },
  plugins: [],
};
