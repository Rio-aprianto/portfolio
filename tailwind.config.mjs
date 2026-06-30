/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1FB6F3',
          dark: '#0EA5E9',
          light: '#E8F7FE',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 55% 45% / 55% 45% 55% 45%' },
          '50%': { borderRadius: '45% 55% 40% 60% / 50% 60% 40% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'scroll-x': 'scroll 30s linear infinite',
        'blob': 'blob 8s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
