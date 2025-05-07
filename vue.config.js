const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.ts',
    }
  },
  transpileDependencies: true,
  devServer: {
    // 前端开发服务器的端口号，也就是我们可以通过 http://localhost:port 来访问前端项目
    port: 7070,
    // 自动打开浏览器
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/admin', // 后端服务端口
        logLevel: 'debug',
        changeOrigin:true,
      }
    }
  },
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/.vue$/],
          }
        }
      ]
    }
  }
})
