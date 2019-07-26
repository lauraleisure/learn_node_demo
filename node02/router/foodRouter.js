var express=require('express');
var router=express.Router();//获取路由实例

router.get('/add',(req,res)=>{
    res.send('food add ok');
});
router.get('/del',(req,res)=>{
    res.send('food del ok');
});
module.exports=router;