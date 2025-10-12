// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//         fontFamily: {
//         'display': ['Inter', 'system-ui', 'sans-serif'], // Headers & Titles
//         'body': ['Outfit', 'system-ui', 'sans-serif'], // Body text
//         'accent': ['Poppins', 'system-ui', 'sans-serif'], // Buttons & CTAs
//         'elegant': ['Playfair Display', 'serif'], // Premium/Logo text
//         'modern': ['Manrope', 'system-ui', 'sans-serif'], // Subtle headings
//         'minimal': ['Figtree', 'system-ui', 'sans-serif'], // Clean UI text
//         'fancy': ['Pacifico', 'cursive'],
//         'mono': ['Source Code Pro', 'monospace']
//       },
//       colors: {
//         nature: {
//           primary: 'var(--nature-primary)',
//           secondary: 'var(--nature-secondary)',
//           accent: 'var(--nature-accent)',
//           light: 'var(--nature-light)',
//           dark: 'var(--nature-dark)',
//           earth: 'var(--nature-earth)',
//           sky: 'var(--nature-sky)',
//           forest: 'var(--nature-forest)',
//           leaf: 'var(--nature-leaf)',
//           moss: 'var(--nature-moss)',
//         }
//       },
//       backgroundImage: {
//         'nature-gradient': 'var(--nature-gradient)',
//         'forest-gradient': 'var(--forest-gradient)',
//         'leaf-gradient': 'var(--leaf-gradient)',
//         'dark-gradient': 'var(--dark-gradient)'
//       },
//       animation: {
//         'float': 'float 3s ease-in-out infinite',
//         'grow': 'grow 0.6s ease-out',
//         'leaf-sway': 'leaf-sway 2s ease-in-out infinite',
//         'shimmer': 'shimmer 2s infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-10px)' },
//         },
//         grow: {
//           '0%': { transform: 'scale(0.8) translateY(20px)', opacity: '0' },
//           '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
//         },
//         'leaf-sway': {
//           '0%, 100%': { transform: 'rotate(-2deg)' },
//           '50%': { transform: 'rotate(2deg)' },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '-200% center' },
//           '100%': { backgroundPosition: '200% center' },
//         }
//       }
//     },
//   },
//   plugins: [],
// }



// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
  // CORRECTED: Combined paths to look through all of './src' 
  // and removed the Next.js specific 'mdx' extension.
  content: [
    "./index.html", // Keep the root index.html
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
        'accent': ['Poppins', 'system-ui', 'sans-serif'],
        'elegant': ['Playfair Display', 'serif'],
        'modern': ['Manrope', 'system-ui', 'sans-serif'],
        'minimal': ['Figtree', 'system-ui', 'sans-serif'],
        'mono': ['Source Code Pro', 'monospace']
      },
      colors: {
        edu: {
          primary: '#1565C0',
          secondary: '#FF6F00',
          accent: '#7B1FA2',
          success: '#00897B',
          warning: '#FFA000',
          light: '#E3F2FD',
          dark: '#0D47A1',
          sky: '#42A5F5',
          purple: '#9C27B0',
          teal: '#26A69A',
        }
      },
      backgroundImage: {
        'edu-gradient': 'linear-gradient(135deg, #1565C0 0%, #42A5F5 50%, #7B1FA2 100%)',
        'knowledge-gradient': 'linear-gradient(135deg, #7B1FA2 0%, #9C27B0 100%)',
        'success-gradient': 'linear-gradient(135deg, #00897B 0%, #26A69A 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      }
    },
  },
  plugins: [],
};

export default config;