const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 在内存中自动生成index页面
const { resolve } = require('path')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html', // 生成内存中的文件名称
  // 压缩html代码
  minify: {
    removeAttributeQuotes: false, //是否删除属性的双引号
    collapseWhitespace: false, //是否折叠空白
  }
})

module.exports = {
  // 模式
  mode: 'development', // development production 声明打包的环境
  // 在webpack 4.x中，约定大于配置，默认的打包入口文件就是src目录下面的index.js文件
  // 开发服务器，用来自动化，自动编译，自动打开浏览器，自动刷新
  // 只会在内存中编译打包，没有输出
  devServer: {
    port: 9000,
    contentBase: resolve(__dirname, 'dist'),
    open: true
  },
  // loader的配置
  module: {
    rules: [
      // 详细的loader的配置
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader
        // 执行顺序 从右到左，从下到上
        use: [
          // 创建style标签，将js中的样式资源插入，添加到head中方生效
          'style-loader',
          // 将css文件编程common.js模块加载js中，里面内容是字符串类型
          'css-loader'
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [ // 存放扩展插件
    htmlPlugin
  ]
}