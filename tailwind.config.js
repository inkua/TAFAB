/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "nosotrosMobile": "url('/home/nosotrosMobile.webp')",
        "nosotrosWeb": "url('/home/nosotrosWeb.webp')",
        "contactoMobile": "url('/home/contactoMobile.webp')",
        "contactoWeb": "url('/home/contactoWeb.webp')",
        "denunciaMobile": "url('/home/carrusel/denunciasMobile.webp')",
        "denunciaWeb": "url('/home/carrusel/denunciasWeb.webp')",
        "aboutWeb": "url('/nosotros/nosotrosWeb.webp')",
        "aboutMobile": "url('/nosotros/nosotrosMobile.webp')",
        "bannerDonar": "url('/bannerDonar.webp')",

      },
      padding: {
        "mobile": "1rem",
        "tablet": "4rem",
      },
      margin: {
        "mobile": "1rem",
        "tablet": "4rem",
      },
      maxWidth: {
        "top": "1500px"
      },
      colors: {
        "primary": "#AC7CB6",
        "secondary": "#D99FC8",
        "tertiary": "#7CCAF2",

        "text-dark": "#4A3D5B",
        "text-black": "#000000",
        "text-white": "#FFFFFF",

        "footer-primary": "#75BDE2",

        "btn-pink": "#FE93A7",
        "bth-blue": "#7CCAF2",
        "btn-purple": "#644C9B",
      }
    }
  
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
