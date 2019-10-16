const path = require('path');
const {
  override,
  addWebpackAlias
} = require("customize-cra");


module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)