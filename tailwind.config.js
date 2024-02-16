/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelYellow: {
          50: '#fcf4d6', // 파스텔 톤 노란색 가장 연한 버전
          100: '#faf0c0', // 조금 더 진한 톤
          200: '#f7ebaa',
          300: '#f5e594',
          400: '#f3e07e',
          500: '#f1db68', // 기본 파스텔 노란색
          600: '#efc842',
          700: '#edb51c',
          800: '#cba932', // 조금 더 어두운 톤
          900: '#b7971d', // 가장 어두운 톤
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
