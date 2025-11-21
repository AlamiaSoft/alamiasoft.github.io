/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'alamia-black': '#0A0A0A',
                'alamia-white': '#FFFFFF',
                'alamia-gray': '#F8FAFC',
                'alamia-light-gray': '#F1F5F9',
                'alamia-dark-gray': '#1E293B',
                'alamia-green': '#10B981',
                'alamia-orange': '#F59E0B',
                'alamia-blue': '#3B82F6',
                'alamia-purple': '#8B5CF6',
                'alamia-light': '#EFF6FF',
                'alamia-dark': '#0F172A',
                'alamia-accent': '#6366F1',
                'alamia-surface': '#FEFEFE',
            },
            fontFamily: {
                ubuntu: ['Ubuntu', 'system-ui', 'sans-serif'],
                nunito: ['Nunito', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
                    '100%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            }
        }
    },
    plugins: [],
}
