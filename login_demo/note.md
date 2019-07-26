# 注册登录
1. 注册登录 mongod
2. 验证码逻辑接口实现
  a.验证用户名存在
  b.获取验证码
3.获取邮箱验证码，实现步骤
 （1）发送邮件
 （2）将邮箱和验证码保存在内存中

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