/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./src/Components/Header/Header.js",
            "./src/Components/Footer/Footer.js",
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
            "./public/index.html"
          ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
