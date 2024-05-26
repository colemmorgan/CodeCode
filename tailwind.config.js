/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
       blue: "#0c121c",
       greyBlue: "#1e293b",
       lightBlue: "#3A79cb",
       greyText:"#E2E8F0",
       white: "rgb(248, 250, 252)",
       green: "#10b981",
       darkGreen: "rgba(16, 185, 129, 0.1)",
       dull: "#ffffffB2"
      },
    },
  },
  plugins: [],
};
