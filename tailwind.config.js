/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ichigo-header': "url('/IchigoHeader.svg')"
      }
    },
  },
  plugins: [],
}