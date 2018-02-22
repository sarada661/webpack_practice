module.exports = {
  plugins: [
    require('postcss-simple-vars')({
      silent: true
    }),
		require('postcss-color-function'),
    require('postcss-nested'),
    require('autoprefixer')({
      browsers: ['last 5 versions']
    })
  ]
};