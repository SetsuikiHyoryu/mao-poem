# 用毛泽东诗词学习原生TypeScript

## 启动方式

### 打包程序

```shell
npm run build
```

### 运行服务器

```shell
npm start
```

### 访问网页

<http://localhost:8000/>

## 项目构建流程

过程中需要安装依赖包，这个流程说明中就不赘述了。

1. 创建 index.html 网页文件。
2. 创建 TypeScript 脚本源文件。
3. 执行 `npx tsc` 命令根据 `tsconfig.json` 配置将 TypeScript 文件编译为 JavaScript 文件。
4. 执行 `npx webpack` 命令根据 `webpack.config.js` 配置将 `npx tsc` 编译后的 JavaScript 文件进一步编译并打包。
5. 在 index.html 中引入 `npx webpack` 打包后的 JavaScript 文件。
6. 创建服务器，返回 index.html 及其用到的 JavaScript 等资源。
   - HTML 直接访问本地 JavaScript 文件会产生跨域的问题，务必通过服务器返回资源。
