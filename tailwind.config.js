/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "node_modules/flowbite-react/lib/esm/**/*.js"
  ],    
  theme: {
    screens: {
      "mobile" : {"min":"390px", "max":"428px"},
      "tablet" : {"min":"429px", "max":"1499px"},
      "desktop" : {"min": "1500px"}
    },
    daisyui: {
      themes: ["light"],
    },
    extend: {
      fontFamily : {
        "Petit" : ["Petit Formal Script","cursive"],
        "Monstserrat" : ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [require('flowbite/plugin')]
};
