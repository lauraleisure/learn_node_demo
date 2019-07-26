const express=require('express');
const router=express.Router();
const User=require('../db/model/userModel');
let codes={};
/**
 * @api {post} /user/reg 用户注册
 * @apiName register
 * @apiGroup User
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} passsword 密码
 * @apiParam {String} code 验证码
 *
 * @apiSuccess {Boolean} error 错误码.
 * @apiSuccess {Number} code 提示码.
 * @apiSuccess {String} msg  消息提醒.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": false,
 *       "code": 200,
 *       "msg": "注册成功"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
/*注册*/
router.post('/reg',(req,res)=>{
    let {username,password,code}=req.body;
    console.log(username,password);
    if(username&&password&&code){
        if(codes[username]!=code){
            return res.send({err:-4,msg:'验证码错误'});
        }
        User.find({username:username,password:password})
            .then((data)=>{
                if(data.length===0){
                  return   User.insertMany({username:username,password:password})
                }else{
                    res.send({err:-3,msg:'用户名已存在'});
                }
            }) .then((data)=>{
                 res.send({err:0,msg:'注册成功'+data});
            }).catch((err)=>{
                res.send({err:-1,msg:'内部错误'+err});
            });


    }else{
        return  res.send({err:-1,msg:'参数错误'});
    }

});

/**
 * @api {post} /user/login 用户登录
 * @apiName login
 * @apiGroup User
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} passsword 密码
 *
 * @apiSuccess {Boolean} error 错误码.
 * @apiSuccess {Number} code 提示码.
 * @apiSuccess {String} msg  消息提醒.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": false,
 *       "code": 200,
 *       "msg": "登录成功"
 *     }
 *
 * @apiError 404 The api was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": true,
 *       "code": 404,
 *       "msg": "Not Found",
 *     }
 */
router.post('/login',(req,res)=>{
    let {username,password}=req.body;
    console.log(username,password);
    if(!username||!password){
        return  res.send({err:-1,msg:'参数错误'});
    }

    /*{username:username,password:password}==={username,password}*/
    User.find({username:username,password:password})
        .then((data)=>{
            if(data.length>0){
                res.send({err:0,msg:'登录成功'});
            }else{
                res.send({err:-2,msg:'用户名和密码不正确'});
            }

        })
        .catch((err)=>{
            res.send({err:-1,msg:'内部错误'+err});
        });
});
/**
 * @api {post} /user/getMailCode 发送邮箱验证码
 * @apiName send mail code
 * @apiGroup User
 *
 * @apiParam {String} username 用户名
 * @apiParam {String} passsword 密码
 *
 * @apiSuccess {Boolean} error 错误码.
 * @apiSuccess {Number} code 提示码.
 * @apiSuccess {String} msg  消息提醒.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": false,
 *       "code": 200,
 *       "msg": "登录成功"
 *     }
 *
 * @apiError 404 The api was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": true,
 *       "code": 404,
 *       "msg": "Not Found",
 *     }
 */
/*发送邮箱验证码*/
router.post('/getMailCode',(req,res)=>{
    let {mail}=req.body;
    let code=parseInt(Math.random()*10000);
    Mail.send(mail,code)
        .then(()=>{
            codes[mail]=code;
            res.send({err:0,msg:'ok'})
        }).catch((err)=>{
        res.send({err:-1,msg:'失败'+err})
    });

});
module.exports=router;