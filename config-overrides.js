
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  // antd按需加载，不需要每个页面都引入“antd/dist/antd.css”了
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true  //这里一定要写true，css和less都不行
  }),
  // 配置路径别名
  addWebpackAlias({
    '@': resolve("src")
  }),
  addLessLoader({
    javascriptEnabled: true,
    //修改antd主题色
    modifyVars: { "@primary-color": "#01a3a4" }
  })
)