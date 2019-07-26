
# node03 Promise理解与使用

    大量的异步操作，如果需要顺序执行 通过回调函数执行 会形成回调地狱
通过promise解决回调地狱

##一、Promise语法
1．第一步：定义函数：封装Promise对象
```
function test() {
    return new Promise((reslove,reject)=>{
      reslove('成功了！');//外部走then的处理函数，表示成功了
      // reject('失败了！');//外部走catch的处理函数，表示失败的处理
    })
};
```
2．第二步：根据顺序，形成链式调用
  test().then().then().catch();

```
/*链式调用，一组链式调用中，只需要一个catch*/
isExist().then((msg)=>{
    console.log('is Exist 的成功处理',msg);
    return delFile();
}).then((data)=>{
    console.log('删除文件的成功处理',data);
}).catch((err)=>{
    console.log(err)
});
```
3．在每个then中写业务逻辑

4．第三步：捕获错误

## 注册登录Demo
1. 注册登录 mongod
2. 验证码逻辑接口实现
  a.验证用户名存在
  b.获取验证码

  postman 模拟发送post请求

3.获取邮箱验证码，实现步骤
 （1）发送邮件
 （2）将邮箱和验证码保存在内存中,memcache,redis缓存库
 （3）5分钟内不能重复发送
      {mail:{ctime:第一次发送的时间戳,code:code}}
 （4）5分钟内不能重复发送三次
      {mail:{ctime:第一次发送的时间戳,code:code,count:count}}

   备注: 先学会核心逻辑，再补充与完善其他逻辑

# 生成api接口文档：apidoc:生成api文档
   1.全局安装
       npm install -g apidoc
       [官网](apidocjs.com)
   2.按照格式写注释

   3.运行(-i:输入目录，-o：输出目录)
     apidoc -i 输入目录 -o 输出目录
     demo:
     ```
       $> apidoc -i ./router  -o ./apidoc
     ```
     4.添加apidoc.json文件，编写接口描述，和api url

     注意：apidoc.json 文件需在根目录创建；运行生成apicdoc命令， 需在项目目录下执行，apidoc.json的配置才能生效