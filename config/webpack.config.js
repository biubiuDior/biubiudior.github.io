/*
 * @Name: webpack配置
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-13
*/

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

/**
 * memo，当前 webpack对象 对应 config
 * env，当前环境，development 或 production
 * webpack，webpack 对象，用于获取其内部插件
 * @param {*} memo
 * @param {*} { env, webpack }
 */
const webpackConfig = (memo, { env, webpack }) => {
  // 图像最小化器, 打包图像资源压缩优化
  memo.plugin("image-minimizer-webpack-plugin").use(ImageMinimizerPlugin, [
    {
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            // Svgo configuration here https://github.com/svg/svgo#configuration
            [
              "svgo",
              {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                        addAttributesToSVGElement: {
                          params: {
                            attributes: [
                              { xmlns: "http://www.w3.org/2000/svg" },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
              },
            ],
          ],
        },
      },
    }
  ])

  // 压缩JavaScript同时去掉console-log
  memo.optimization.minimizer('terser-webpack-plugin').use(TerserPlugin,[{
    terserOptions: {
      compress: {
        drop_debugger: true,
        drop_console: true,
        pure_funcs: ['console.log']//删除打印语句
      },
      format: {
        comments: false //删除所有注释
      }

    },
    parallel: true,  //多核打包，提升打包速度
    extractComments: false //是否将注释全部集中到一个文件中
  }])

  // 通过gzip打包后传输，节省带宽
  memo.plugin('CompressionPlugin').use(new CompressionPlugin({
      algorithm: 'gzip',
      test: productionGzipExtensions,
      // 只处理大于xx字节 的文件，默认：0
      threshold: 10240,
      // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
      minRatio: 0.8, // 默认: 0.8
      // 是否删除源文件，默认: false
      deleteOriginalAssets: false,
    }),);
}
export default webpackConfig;