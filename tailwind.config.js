const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-fff": "var(--primary-fff)",
        "primary-363": "var(--primary-363)",
        "secondary-f5f": "var(--secondary-f5f)",
        "secondary-fef": "var(--secondary-fef)",
        "text-faf": "var(--text-faf)",
        "text-7d8": "var(--text-7d8)",
        "text2-black": "var(--text2-black)",
        "secondary2-db44": "var(--secondary2-db44)",
        "button-black": "var(--button-black)",
        "button-green": "var(--button-green)",
        "button-red": "var(--button-red)",
        "hover-btn-red": "var(--hover-btn-red)",
        "hover-btn-sky": "var(--hover-btn-sky)",
        black2626: "var(--black2626)",
      },
      fontFamily: {
        poppins: "var(--poppins)",
        inter: "var(--inter)",
      },
      container: {
        center: true,
      },
      spacing: {
        container: "1440px",
      },
    },
  },
  plugins: [],
});
