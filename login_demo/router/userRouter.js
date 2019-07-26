const express=require('express');
const router=express.Router();
const User=require('../db/model/userModel');
/*注册*/
router.post('/reg',(req,res)=>{
    let {username,password}=req.body;
    console.log(username,password);
    if(username&&password){
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

module.exports=router;