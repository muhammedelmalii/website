/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0E1A',
          light: '#1A1E2A',
          dark: '#060A14',
        },
        gold: {
          DEFAULT: '#CBA356',
          light: '#E3C989',
          dark: '#A57F34',
        },
        cosmic: {
          white: '#F8F8F8',
          gray: '#A0A0A0',
          accent: '#7E57C2',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['"DM Serif Display"', 'ui-serif', 'Georgia'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'star-pattern': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'stars': '50px 50px',
      }
    },
  },
  plugins: [],
};