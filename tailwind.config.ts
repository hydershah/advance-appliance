import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/designs/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design 3 direct color aliases
        ivory: '#F5F2E8',
        forest: '#0F172A',
        burgundy: '#2F3B4B',
        copper: '#C6A15B',
        // Design 1: Elegant Minimalist (Gold & Black)
        elegant: {
          gold: {
            50: '#faf8f3',
            100: '#f5f0e6',
            200: '#ebe0cc',
            300: '#dcc9a3',
            400: '#D4AF37', // Primary gold
            500: '#b89530',
            600: '#9d7c28',
            700: '#7d6220',
            800: '#5e4a1a',
            900: '#3f3213',
          },
          black: '#000000',
          white: '#FFFFFF',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
        },
        // Design 2: Modern Professional Luxury (Navy & Cream)
        modern: {
          navy: {
            50: '#f0f4f8',
            100: '#d9e2ec',
            200: '#bcccdc',
            300: '#9fb3c8',
            400: '#829ab1',
            500: '#627d98',
            600: '#486581',
            700: '#334e68',
            800: '#243b53',
            900: '#07203f', // Primary navy
          },
          cream: {
            50: '#fdfcfb',
            100: '#faf8f5',
            200: '#f5f1ed',
            300: '#ebded4', // Primary background cream
            400: '#e1ccbd',
            500: '#d9aa90', // Accent tan
            600: '#c89372',
            700: '#b07754',
            800: '#8f5f3f',
            900: '#6d4730',
          },
          blue: {
            50: '#e6f3ff',
            100: '#b3daff',
            200: '#80c1ff',
            300: '#4da8ff',
            400: '#1a8fff',
            500: '#116dff', // CTA blue
            600: '#0d57cc',
            700: '#0a4199',
            800: '#062b66',
            900: '#031533',
          },
          gold: {
            50: '#fef8f0',
            100: '#fcefd9',
            200: '#f9ddb3',
            300: '#f5cb8c',
            400: '#f2b965',
            500: '#efc07b', // Gold highlight
            600: '#d4a866',
            700: '#b99050',
            800: '#9e783b',
            900: '#836025',
          },
          charcoal: '#2c3e50',
          white: '#ffffff',
        },
        // Design 3: Contemporary Elegance (Platinum & Gold)
        contemporary: {
          charcoal: {
            50: '#f8f9fa',
            100: '#eceff1',
            200: '#cfd8dc',
            300: '#b0bec5',
            400: '#90a4ae',
            500: '#607d8b',
            600: '#546e7a',
            700: '#455a64',
            800: '#34495e', // Secondary charcoal
            900: '#2c3e50', // Primary charcoal
          },
          platinum: {
            50: '#fefefe',
            100: '#fdfdfd',
            200: '#ecf0f1', // Light background
            300: '#dfe6e9',
            400: '#bdc3c7', // Silver
            500: '#95a5a6',
            600: '#7f8c8d',
            700: '#6c7a7b',
            800: '#59686a',
            900: '#465658',
          },
          gold: {
            50: '#faf7f2',
            100: '#f5efe5',
            200: '#e8d9c5',
            300: '#dbc3a5',
            400: '#ceac85',
            500: '#C19A6B', // Gold accent
            600: '#aa8660',
            700: '#937254',
            800: '#7c5e48',
            900: '#654a3c',
          },
          slate: {
            50: '#f7f8fa',
            100: '#eef0f3',
            200: '#d5dae0',
            300: '#bcc4cd',
            400: '#a3aeba',
            500: '#8a98a7',
            600: '#748394',
            700: '#5e6d81',
            800: '#48586e',
            900: '#34495e', // Depth color
          },
          white: '#ffffff',
          cream: '#fafaf8',
        },
        // Functional colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        success: {
          light: '#d1fae5',
          DEFAULT: '#10b981',
          dark: '#065f46',
        },
        warning: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#92400e',
        },
        error: {
          light: '#fee2e2',
          DEFAULT: '#ef4444',
          dark: '#991b1b',
        },
      },
      fontFamily: {
        // Design 1: Elegant Minimalist
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        // Design 2: Modern Professional
        lora: ['Lora', 'serif'],
        openSans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        // Design 3: Contemporary Elegance
        poppins: ['Poppins', 'sans-serif'],
        // Default
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Fira Code', 'Menlo', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -1px rgba(212, 175, 55, 0.06)',
        'elegant-lg': '0 10px 15px -3px rgba(212, 175, 55, 0.1), 0 4px 6px -2px rgba(212, 175, 55, 0.05)',
        'modern': '0 4px 6px -1px rgba(7, 32, 63, 0.1), 0 2px 4px -1px rgba(7, 32, 63, 0.06)',
        'modern-lg': '0 10px 15px -3px rgba(7, 32, 63, 0.1), 0 4px 6px -2px rgba(7, 32, 63, 0.05)',
        'contemporary': '0 4px 6px -1px rgba(44, 62, 80, 0.1), 0 2px 4px -1px rgba(44, 62, 80, 0.06)',
        'contemporary-lg': '0 10px 15px -3px rgba(44, 62, 80, 0.1), 0 4px 6px -2px rgba(44, 62, 80, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              fontWeight: '700',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
