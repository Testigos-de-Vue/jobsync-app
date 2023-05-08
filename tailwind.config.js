/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      darkMode: "class",
      colors: {
        primary: "#3066be",
        secondary: "#00c9a7",
        tertiary: "#f5f9ff",
        black: "#313131",
      },
    },
  },
  plugins: [],
}

