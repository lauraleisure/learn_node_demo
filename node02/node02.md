# 中间件：Middleware
## 一、内置中间件

1．静态资源目录：static

    静态资源作用：指定一个目录，目录可以被访问；等同于apache下的www目录

Demo;

```
    const express=require('express');
    const path=require('path');
    /*express实例化*/
    const app=express();
    /* 域名：端口号的方式访问， 直接指向规定的静态目录*/
    app.use(express.static(path.join(__dirname,'./public')));
    //上方的语法，等同于：
    app.use('/',express.static(path.join(__dirname,'./public')));
    /*设置静态目录一般指定一个具体的路径，常用/public*/
    app.use('/public',express.static(path.join(__dirname,'./public')));
```

2．获取当前文件所在的绝对路径：__dirname

    path模块：实现绝对路径与相对路径的拼接
    path模块的Join方法，实现多个目录的拼接

## 二、自定义中间件
1．全局中间件
```
    /*全局中间件demo*/
    const express=require('express');
    const app=express();
    app.use('/',(req,res,next)=>{
       console.log('中间件');
        let {token}=req.query;
        if(token){
            next();//是否继续往下执行
        }else{
            res.send('缺少token');
        }
    });
```
2．局部中间件

```
    /*局部中间件demo*/
    const express=require('express');
    const app=express();//获取express实例
    /*局部中间件语法：app.use('pathname',fun1,func2,func3)*/
    app.use('/test',(req,res,next)=>{
       console.log('中间件');
       res.send('test中间件 局部中间件 fun1');
    },(req,res)=>{
        res.send('test中间件 局部中间件 fun2');
    });
```

    局部中间件的function可以写很多个，只要在合适的地方执行next，即可实现。

# 三、第三方中间件：
如：body-parser、拦截器
注意：中间件的使用一定要在合适的地方next
