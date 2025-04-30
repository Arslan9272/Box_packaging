// theme.js - Tailwind CSS Theme Configuration
// This file centralizes your project's design tokens and theme settings

const theme = {
    // Colors
    colors: {
      // Primary color - beige
      beige: {
       
        DEFAULT: '#DDD0C8', 
        light: '#fdfdf5', // Your light beige color
        dark: '#e5e5c0',  // Your dark beige color
      },
      // Secondary/accent colors - complementary to beige
      accent: {

        DEFAULT: '#4a9485',

      },
      // Neutral colors for text, backgrounds, etc.
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',   //header text
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      },
      // Success, warning, error, info states with earthy tones to match beige
      success: {
        light: '#d4e4d4',
        DEFAULT: '#679267',
        dark: '#3e573e',
      },
      warning: {
        light: '#f7e8d4',
        DEFAULT: '#d4a05a',
        dark: '#9c6d34',
      },
      error: {
        light: '#f3d8d8',
        DEFAULT: '#bc6464',
        dark: '#864646',
      },
      info: {
        light: '#d8e1f3',
        DEFAULT: '#6481bc',
        dark: '#465b86',
      },
    },
  
    // Typography - fonts that complement the beige aesthetic
    fonts: {
      sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['Playfair Display', 'Merriweather', 'ui-serif', 'Georgia', 'serif'],
      mono: ['IBM Plex Mono', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    
    fontSizes: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
  
    // Spacing
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',   // 2px
      1: '0.25rem',      // 4px
      1.5: '0.375rem',   // 6px
      2: '0.5rem',       // 8px
      2.5: '0.625rem',   // 10px
      3: '0.75rem',      // 12px
      3.5: '0.875rem',   // 14px
      4: '1rem',         // 16px
      5: '1.25rem',      // 20px
      6: '1.5rem',       // 24px
      8: '2rem',         // 32px
      10: '2.5rem',      // 40px
      12: '3rem',        // 48px
      16: '4rem',        // 64px
      20: '5rem',        // 80px
      24: '6rem',        // 96px
      32: '8rem',        // 128px
    },
  
    // Breakpoints for responsive design
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  
    // Border radius
    borderRadius: {
      none: '0',
      sm: '0.125rem',    // 2px
      DEFAULT: '0.25rem', // 4px
      md: '0.375rem',    // 6px
      lg: '0.5rem',      // 8px
      xl: '0.75rem',     // 12px
      '2xl': '1rem',     // 16px
      '3xl': '1.5rem',   // 24px
      full: '9999px',
    },
  
    // Shadows
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  
    // Z-index
    zIndex: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      auto: 'auto',
      dropdown: '1000',
      sticky: '1020',
      fixed: '1030',
      drawer: '1040',
      modal: '1050',
      popover: '1060',
      tooltip: '1070',
    },
  
    // Transitions
    transitions: {
      DEFAULT: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
      fast: '100ms cubic-bezier(0.4, 0, 0.2, 1)',
      slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
      ease: {
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  };
  
  module.exports = theme;