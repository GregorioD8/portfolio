module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Scan your source folder for Tailwind classes
    ],
    theme: {
      extend: {
        backgroundImage: {
          "hero-pattern": "url('/images/abstract-particles.jpg')", // Replace with your custom background image
        },
      },
    },
    plugins: [],
  };