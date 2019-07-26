
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
3.获取邮箱验证码，实现步骤
 （1）发送邮件
 （2）将邮箱和验证码保存在内存中
