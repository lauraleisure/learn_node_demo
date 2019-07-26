
# 一、Node发展
   + Mode js不是因为js产生的
   + Node选择了js（最开始选择的是ruby,发现ruby并不太适合）
   +  node作者：Ryan dahl
   +  2009年2月份 有node想法
   +  2009年5月份 github开源
   +  2009年11月份 jsconf 讲解推广node
   +  2010年底 被xxx公司收购
   +  2018年 发布有重大bug
   +  npm ：node包管理工具
   +  githup 时间是最大的同性交友网站 码云

# 二、什么是Node
+ node 介绍
1．Chrome v8 runtime
     Node.js是一个机遇Chrome v8引擎的javaScript运行环境
2．事件驱动、非阻塞i/o
     Node.js使用了一个事件驱动、非阻塞I/O的模型，使其轻量又高效。
+ i/o： 指的是输入输出流
  + 正常情况下，i/o的操作是阻塞的（ajax的同步）；
  + 常见的阻塞的操作：网络请求，数据库处理，文件的读写...
  + Node.js的包管理工具npm，是全球最大的开源库生态系统。

[官网](http://nodejs.cn)
[Npm 插件官网](https://www.npmjs.com)

3．Node.js和js的区别
  js是运行在浏览器端的，出于安全性考虑，不能操作数据库，不能操作系统文件；
  主要操作DOM；
  Node.js是运行在服务器端的；
4．优点：高并发特别好
  Python出现后，做高并发比node 还好

# 三、为什么要学习node
 1．防止甩锅
 2．能够书写api
      斜杠青年：接外包活，写api接口,学习UI
 3．了解前后端的交互流程
 4．全栈工程师
      全栈工程师：全干工程师
      (Node.rb,Node.ru)
    node从产生想法到实现，仅用了4个月。

 5．Api接口文档：apidoc
             ApiUrl
             参数
             返回结果格式

# 四、js运行环境
## 1． 浏览器
        基本语法
        Bom
        Dom
        Ajax
        系统文件数据库（不能，不是语言不能，是出于安全性考虑不能）
## 2． 服务器
        基本语法
        能操作数据库
        能操作本地文件
        限制语言能力的不是语言本身，而是语言的运行环境（平台）
## 3．Nvm： node的版本管理工具
        在一台电脑上有多个版本的开发需求：安装nvm
        查看node版本：Node -v
        查看已安装的node：nvm ls
        切换node版本：nvm use v10.8.0
    （1）node版本常识
        偶数版为稳定版（0.6.x,0.8.x,0.10.x）
        奇数版为非稳定版（0.7.x,0.9.x,0.11.x）
        LTS（long Term Support）
        LTS和current的区别

    （2）nvm安装的操作方式
        重新下载最新的安装包
        覆盖安装即可
    （3）问题
        以前版本安装的很多全局的工具包需要重新安装
        无法回滚到之前的版本
        无法在多个版本之间切换（很多时候我们需要特定版本）

    （4）下载node包时很慢的解决办法
        方法一：更换npm镜像源（推荐使用）
        配置npm镜像源：切换到国内淘宝
        ```
        $ npm config set registry https://registry.npm.taobao.org
        ```
       配置后可通过下列方式验证是否成功
       ```
        $ npm config get registry 或 $ npm info express
        ```
    方法二：安装cnpm （不太建议安装）
    $ npm install -g cnpm --registry=https://registry.npm.taobao.org
    使用cnpm 安装包
    $ cnpm install express

# 五、node的运行环境 REPL
    REPL环境:指直接在命令行里写代码
    一般写法：新建js文件
    __dirname:当前文件的执行目录

# 六、模块化
1．内置模块：node中已经提供的可以直接调用
    文件操作：fs
    url:统一资源定位
2．第三方模块
    自己写完模块后，上传到npm ,供其他人使用。
    Nodemailer可以发邮件

[npm 官网链接](https://www.npmjs.com)

3．自定义模块
    第一步：创建模块（一个js文件一个模块）
    第二步：导出模块（module.export=name）
    第三步：引用一个模块并且调用

4．Demo：打印当前目录的目录树
（1）思路分析
    第一步：实现的效果
    第二步：分析功能点
        当前目录结构
        分析是文件还是文件夹

（2）参考代码
```
    const fs=require('fs');

    //1.同步调用:在关键位置捕获错误信息，不能造成程序崩溃
    try{
        let dirs =fs.readdirSync('./');
    }catch(err){
        console.log('出错了',err)
    }
    console.log(2222);

    //2.异步调用
    fs.readdir('./node01',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
    //错误的回调优先，在回调函数中第一个参数表示错误对象，默认为null;如果出现错误，err就是错误对象
```

（3）总结：
    错误处理 同步：try catch 异步：错误回调优先

# 七、Node 爬虫：使用http/https 模块实现简易的爬虫
    1.获取目标网站：http.get
    2.分析网站内容:cheerio:可以使用jq里的选择器
    3.获取有效信息

    http协议的网址使用http模块
    https协议的网址使用https模块

实现思路：
1.请求网站数据
2.将数据保存本地
  (1).分析网站内容:cheerio:可以使用jq里的选择器
  (2).获取有效信息





























