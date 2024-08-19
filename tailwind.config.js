/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-smoke':'#F5F5F4',
        'silver': '#bab6b5ff',
        'light-brown': '#725e54ff',
        'dark-brown': '#443627ff',
        'purple': '#4c2a85ff',
        'light-blue': '#1789fcff',
      },
    },
  },
  plugins: [],
}

