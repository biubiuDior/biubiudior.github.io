/*
 * @Name: webpack配置
 * @Description: 描述信息
 * @Author: biubiu
 * @Date: 2023-12-13
*/

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path')

/**
 * memo，当前 webpack对象 对应 config
 * env，当前环境，development 或 production
 * webpack，webpack 对象，用于获取其内部插件
 * @param {*} memo
 * @param {*} { env, webpack }
 */
const webpackConfig = (memo, { env, webpack }) => {
  // 图像最小化器, 图片资源压缩优化
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
}
export default webpackConfig;