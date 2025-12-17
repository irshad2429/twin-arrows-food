 <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              serif: ['Playfair Display', 'serif'],
            },
            colors: {
              gold: {
                400: '#D4AF37',
                500: '#C5A028',
                600: '#B08D26',
              }
            },
            animation: {
              'fadeIn': 'fadeIn 0.8s ease-out forwards',
              'slideUp': 'slideUp 0.8s ease-out forwards',
              'slowZoom': 'slowZoom 20s linear infinite alternate',
            },
            keyframes: {
              fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              },
              slideUp: {
                '0%': { opacity: '0', transform: 'translateY(40px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              slowZoom: {
                '0%': { transform: 'scale(1)' },
                '100%': { transform: 'scale(1.15)' },
              }
            }
          }
        }
      }
    </script>
