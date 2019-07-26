"use strict";
const nodemailer = require("nodemailer");

//创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方邮箱
    port: 465,//端口号
    secure: true, // true for 465, false for other ports
    auth: {
        user: '498906282@qq.com', // 发送方的邮箱地址
        pass: 'bheotnzpkeuhbhjc' //smtp验证码
    }
});

/*在nodemailer的插件库里查找lib，在lib中的well-known的services.json中查找*/



function send(mail,code) {
    // 创建邮件信息
    let mailObj ={
        from: '"Laura leisure website" <498906282@qq.com>', // sender address
        to: mail, // list of receivers
        subject: "注册邮箱有效性验证", // Subject line
        text: "您的验证码是${code}"  //${code}模板字符
    };
   return new Promise((reslove,reject)=>{
       /*发送邮件*/
       transporter.sendMail(mailObj,(err,data)=>{
           if(err){
               reject(err);
           }else{
               reslove(data);
           }

       });
   })

}
module.exports={send:send}