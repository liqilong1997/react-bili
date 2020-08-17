# bili参考从0搭建项目脚手架

## webpack安装
### 1. 运行 ``` cnpm init -y ``` 初始化项目
### 2. 运行 ``` cnpm install webpack webpack-cli -g ``` 全局安装最新版本的webpack
```
mac版本需要在命令前加sudo
```
### 3. 运行 ``` cnpm install webpack webpack-cli -D ``` 将webpack添加到开发环境
### 4. 创建目录
```
在项目目录创建一个src文件夹，存放项目主体
创建dist目录，存放打包内容

初始运行指令
开发环境: ``` webpack ./src/main.js -o ./dist/index.js --mode=development ```
webpack 会以 ./src/main.js 为入口文件开始打包，打包后输出到 ./dist/index.js mode指定环境为开发环境

生产环境: ``` webpack ./src/main.js -o ./dist/index.js --mode=production ```
webpack 会以 ./src/main.js 为入口文件开始打包，打包后输出到 ./dist/index.js mode指定环境为生产环境

生产环境打包的文件比开发环境多了压缩，文件夹体积更小

webpack初始能处理js/json资源，不能处理css/img等其他资源
生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化

需要处理其他的资源有，要进行相关的loader配置，所以进行下一步

```

### 5. 创建webpack配置文件 webpack.config.js 
```
   作用： 知识webpack需要做什么，在运行webpack命令时，会加载里面的配置
   默认采用common.js
   在webpack 4.x中，约定大于配置，尽量减少配置文件的提及，
   默认的打包入口文件就是src目录下面的index.js文件
   默认的打包出口文件就是dist目录下面的main.js
```

### 6. webpack常用配置
```
1.webpack-dev-server （下载 使用）
  用途：实时打包编译,生成的输出文件托管在内存中，可以认为在项目根目录中有隐藏的输出文件
  参数配置可以在webpack配置文件中设置，在devServer对象中
  compress 启用gzip压缩
  disableHostCheck 设置true为该选项时，将绕过主机检查（会容易使应用受到DNS攻击）
  filename 指定在请求特定文件的时候进行编译
  headers 将标头添加到所有响应
  host 指定主机
  hot 启用热更新(只替换更新的部分，需要配置入口文件，如果想自动刷新网页，则不能使用这个配置)
  hotOnly 启用热模块替换，而无需页面刷新作为构建失败的后备
  open 指示dev-server在服务器启动后打开浏览器
  port 指定端口号以侦听请求
  proxy 拥有单独的API后端开发服务器并且希望在同一域上发送API请求时，代理某些URL
  public 使用内联模式并且代理dev-server时，内联客户端脚本并不总是知道要连接到哪里。它将尝试基于猜测服务器的URL window.location，但是如果失败，则需要使用它
  useLocalIp 使浏览器可以使用你的本地IP打开
  writeToDisk 将生成的资产写入磁盘
  ...

2.html-webpack-plugin（插件 下载 引入 使用）
功能： 默认创建一个空的html，自动引入打包输出的所有资源（js/css）
``` 
