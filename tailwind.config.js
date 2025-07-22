module.exports = {
  content: [
    './src/**/*.{html,js}', // Ajuste cela en fonction de ton projet
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ajoute la police 'Bitcount' à Tailwind
        bitcount: ['Bitcount Prop Single', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Si tu utilises ce plugin, tu peux l'ajouter ici
    require('tailwindcss-animate'),
  ],
}
