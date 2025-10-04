/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          primary: '#0891B2',
          secondary: '#0C4A6E',
          accent: '#06B6D4',
          'accent-light': '#22D3EE',
        },
        // Light Mode Colours
        light: {
          DEFAULT: '#FFFFFF',
          surface: '#F8FAFC',
          'text-primary': '#0F172A',
          'text-secondary': '#475569',
          border: '#E2E8F0'
        },
        dark: {
          DEFAULT: '#0F172A',
          surface: '#1E293B',
          'text-primary': '#F8FAFC',
          'text-secondary': '#CBD5E1',
          border: '#334155',
        },
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#0891B2'
      }, 
      backgroundColor: {
        'base': 'var(--color-bg-base)',
        'surface': 'var(--color-text-secondary)'
      },
      borderColor: {
        'base': 'var(--color-border-base)'
      },
      textColor: {
        'primary': 'var(--color-text-primary)',
        'secondary': 'var(--color-text-secondary)'
      }
    },
  },
  plugins: [],
}

