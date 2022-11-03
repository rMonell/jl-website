const SPACING_RATIO = 4

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      content: {
        DEFAULT: "#1C1A2F",
        clear: "#E4E3EE",
      },
      primary: { DEFAULT: "#2E66AA" },
    },
    fontFamily: {
      body: ["Futura PT", "sans-serif"],
      display: ["DM Serif Display", "serif"],
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "60px",
      "4xl": "80px",
    },
    spacing: [...new Array(10).keys()].map(key => key + 1).reduce((acc, spacing) => ({
      ...acc,
      [spacing]: `${spacing * SPACING_RATIO}px`,
    }), []),
  },
}