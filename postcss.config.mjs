const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        loading: "loading 1.5s linear infinite",
      },
    },
  },
  // content: [
  //   "./src/**/*.{js,ts,jsx,tsx}",
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  // plugins: {
  //   "@tailwind/postcss": {},
  // },
};

export default config;
