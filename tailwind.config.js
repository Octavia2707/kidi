/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan jalur file yang digunakan sudah benar
  ],
  theme: {
    extend: {
      fontFamily: {
        Judson: ["Judson", "serif"], // Tambahkan font Judson di sini
      },
    },
  },
  plugins: [],
};
