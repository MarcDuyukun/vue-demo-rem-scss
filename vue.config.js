const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  css: {
    // 是否使用css分离插件
    extract: false,
    // 是否开启错误定位
    sourceMap: true,
    // css预设置配置项
    loaderOptions: {
      css: {
        // 配置 CSS Modules 的class命名规则
        modules: {
          rules: [
            {
              test: /\.css$/,
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
              ]
            }
          ]
        }
      },
      sass: {
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
        // 因为 `scss` 语法在内部也是由 sass-loader 处理的
        // 但是在配置 `data` 选项的时候
        // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
        prependData: '@import "~@/assets/css/style.scss";'
        // prependData: '@import "@css/style.scss";'
      }
    },
    // 是否启用css modules for all css
    // modules: false
    requireModuleExtension: true
  },

  configureWebpack: config => {
    // config.module.rules.push({
    //   test: /\.css$/i,
    //   use: ['sass-loader', 'css-loader']
    // })
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      return {
        resolve: {
          alias: {
            '@js': path.resolve(__dirname, './src/assets/js'),
            '@css': path.resolve(__dirname, './src/assets/css'),
            '@imgs': path.resolve(__dirname, './src/assets/images'),
            '@c': path.resolve(__dirname, './src/components')
          }
        },
        devtool: 'source-map',
        plugins: [
          new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            // 忽略加载顺序 否侧引入顺序不对回报警告
            ignoreOrder: true
          })
        ]
        // module: {
        //   rules: [
        //     {
        //       test: /\.css$/,
        //       use: [
        //         MiniCssExtractPlugin.loader,
        //         'css-loader'
        //       ]
        //     }
        //   ]
        // }
      }
    }
  }
}
