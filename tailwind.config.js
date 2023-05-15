/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('assets/Home-hero.png')",
        "hero-child": "url('assets/child-bg.jpg')",
        "hero-loan": "url('assets/loan-hero-bg.jpg')",
        "social-button": "url('assets/hero-maize.jpg')",
        "feed-africa": "url('assets/feed-africa-bg.png')",
        "newsletter": "url('assets/newsletter-gradient.png')",
        "signup": "url('assets/signup-bg.jpg')",
        "world": "url('assets/world.png')",
        "share": "url('assets/distributors-bg.png')",
        "agrobond": "url('assets/Agrobond-bg.png')",
        "login": "url('assets/login-bgf.png')",
        "checkEmail": "url('assets/checkEmail-bg.png')",

      },
      fontFamily: {
        Tangerine: ["Tangerine", "cursive"],
        Poppins: ['Poppins', "sans-serif"],
        Manrope: ['Manrope', "sans-serif"]
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};