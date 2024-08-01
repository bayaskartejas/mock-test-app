// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to the file types you are using
  ],
  theme: {
    extend: {
      colors: {
        green: {
          101: "#00b386",
          201: "#00b398"
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        'bp': '940px'
      }
    },
  },
  plugins: [],
}
