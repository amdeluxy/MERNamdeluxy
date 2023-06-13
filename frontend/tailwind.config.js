/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
     }),
     gradientColorStops: theme => ({
        'blue-green': '#0f0',
        'blue-500': '#3b82f6',
        'pink-red': '#f00',
     }),
    },
  },
  plugins: [],
}


