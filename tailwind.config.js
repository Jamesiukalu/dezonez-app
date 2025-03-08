module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
    theme: {
      extend: {
        HerobackgroundImage: { 'background': "url('./src/assets/image.webp')" }
      },
    },
    plugins: [],
  };