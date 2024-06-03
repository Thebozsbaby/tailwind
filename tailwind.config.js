/** @type {import ('tailwindcss').Config} */
module.exports = {
content: ["./*.html"],
  theme: {
    extend: {
      "sm":"480px"
    },
    spacing:{
      "big":"48rem"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  ,
  plugins:[],
}

