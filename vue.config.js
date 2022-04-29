module.exports = {
  //...其他配置
  css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-pxtorem')({
                      rootValue: 120,
                      propList: ['*']
                  })
              ]
          }
      }
  },}
