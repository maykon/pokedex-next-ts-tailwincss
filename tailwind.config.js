module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      rubik: ["rubik"],
    },
    extend: {
      gridTemplateColumns: {
        320: "repeat(auto-fit, minmax(320px, 1fr))",
      },
    },
  },
  variants: {
    extend: {
      animation: [
        "responsive",
        "motion-safe",
        "motion-reduce",
        "hover",
        "focus",
      ],
    },
  },
  plugins: [],
};
