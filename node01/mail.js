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
    // 创建邮件信息
    let mailObj ={
        from: '"Fred Foo 👻" <498906282@qq.com>', // sender address
        to: "498906282@qq.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "邮箱发送邮件功能测试Hello world", // plain text body
        // html: "<b>Hello world?</b>" // html body
    };
    /*发送邮件*/
   transporter.sendMail(mailObj,(err,data)=>{
       console.log(err);
       console.log(data);
   });

