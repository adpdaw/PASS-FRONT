/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}",
            "./src/index_components/Header/Header.js",
            // "./src/index_components/Header/IndexHeader.js",
            "./src/index_components/Header/Nav.js",
            "./src/index_components/Footer/Footer.js",
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
            "./public/index.html",
            "./src/index_components/Body/AboutSection.js",
            "./src/index_components/Body/AboutSection2.js",
            "./src/Sign-up/Signup.js",
            "./src/Login/Login.js"
            
          ],
 darkMode: 'class', // or 'media' or 'class'
 
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
