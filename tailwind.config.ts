import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c96442',
        'primary-hover': '#b45433',
        'primary-light': '#f1e6db',
        background: '#f5f4ed',
        'background-dark': '#f1ede2',
        card: '#faf9f5',
        text: {
          primary: '#1f1d1a',
          secondary: '#5f5a52',
          tertiary: '#8a8378',
        },
        border: '#dfd6c7',
      },
      fontFamily: {
        sans: ['Aptos', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
        display: ['Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Georgia', 'Noto Serif SC', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        card: '1.25rem',
        button: '0.75rem',
        sidebar: '1rem',
      },
      boxShadow: {
        card: '0 10px 28px rgba(66, 49, 24, 0.06), 0 2px 6px rgba(66, 49, 24, 0.04)',
        'card-hover': '0 22px 52px rgba(66, 49, 24, 0.09), 0 6px 16px rgba(66, 49, 24, 0.05)',
        glass: '0 16px 48px rgba(66, 49, 24, 0.08)',
        sidebar: '0 12px 32px rgba(66, 49, 24, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        expand: 'expand 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        collapse: 'collapse 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        expand: {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: 'var(--expanded-height)', opacity: '1' },
        },
        collapse: {
          '0%': { height: 'var(--expanded-height)', opacity: '1' },
          '100%': { height: '0', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
