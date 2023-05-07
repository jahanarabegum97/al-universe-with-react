/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#80c43c",
        
"secondary": "#1659b7",
        
"accent": "#7ce28f",
        
"neutral": "#231424",
        
"base-100": "#EEECEE",
        
"info": "#46B5F1",
        
"success": "#1A6B45",
        
"warning": "#C99513",
        
"error": "#DD472C",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

