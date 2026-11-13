/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          royal: '#0866F5',
          deep: '#102B8C',
          electric: '#087EFF',
          purple: '#7936F2',
          navy: '#101A48',
          lightBg: '#F5F8FF',
          darkBg: '#090D24',
          cardBorder: '#E1E8FD',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(8, 102, 245, 0.35)',
        'glow-purple': '0 0 25px rgba(121, 54, 242, 0.35)',
        'card': '0 10px 30px -5px rgba(16, 43, 140, 0.07)',
        'card-hover': '0 20px 40px -5px rgba(16, 43, 140, 0.15)',
        'hero': '0 25px 60px -15px rgba(8, 102, 245, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0866F5 0%, #7936F2 100%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F5F8FF 100%)',
      }
    },
  },
  plugins: [],
}

