// 设置反向代理
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { 
       target: "http://localhost:8000",
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
    })
  );
};