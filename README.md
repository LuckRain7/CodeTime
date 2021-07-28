# CodeTime

> 用于进行代码 coding 时间的处理及展示

## ui

> 内置支持 vant  antd

```shell
yarn add vant
```

```js
// 组件中使用
import Button from 'vant/lib/button'
import 'vant/lib/button/index.less'
import Field from 'vant/lib/field'
import 'vant/lib/field/index.less'
```

## 技术栈

ykfe/ssr 官方文档请查看 [http://doc.ssr-fc.com/](http://doc.ssr-fc.com/)

getting start

```bash
$ npm start # 本地开发模式运行，单进程 支持 前端 HMR 前端静态资源走本地 webpack 服务
$ npm run prod # 模拟生产环境运行，多进程，前端资源走静态目录
$ npm run stop # 生产环境停止服务
```
