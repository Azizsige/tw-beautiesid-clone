module.exports = {
  content: ["./dist/js/*.js", "./dist/css/*.css", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Roboto", "sans-serif"'],
      },
      boxShadow: {
        'custom': '10px 10px 30px 0px rgba(234, 141, 136, 40%)',
        'custom2': '16px 16px 60px 0px rgba(178, 94, 90, 60%)',
        'section2': '10px 10px 18px 4px rgba(217,217,217,0.73)',
        'section4': '5px 8px 16px -4px rgba(217,217,217,0.73)'
      },
      backgroundImage: {
        'section-2': "url('/assets/bgsec2.png')",
      },
      colors: {
        'heading': '#555555',
        'paragraph': '#888888',
        'brand': '#EE9591'
      }
    },
  },
  plugins: [],
};
