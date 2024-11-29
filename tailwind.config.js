/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #ffffff, #cde6fd)',
        'custom-radial2': 'radial-gradient(circle, #ABD7FF40, #034CDB59)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

