module.exports = {
  content: ["./dist/js/*.js", "./dist/css/*.css", "./*.html", "./assets/*.png"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Roboto", "sans-serif"'],
      },
      boxShadow: {
        'custom': '10px 10px 30px 0px rgba(234, 141, 136, 40%)',
        'custom2': '16px 16px 60px 0px rgba(178, 94, 90, 60%)'
      }
    },
  },
  plugins: [],
};
