module.exports = {
  content: ["./dist/js/*.js", "./dist/css/*.css", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Roboto", "sans-serif"'],
      },
      boxShadow: {
        'custom': '10px 10px 30px 0px rgba(234, 141, 136, 40%)'
      }
    },
  },
  plugins: [],
};
