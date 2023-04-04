module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      fontSize: {
        xxs: ["0.6rem", "0.75rem"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      padding: {
        full: "100%",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
