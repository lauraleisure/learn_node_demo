var express=require('express');
var router=express.Router();//获取路由实例

router.get('/add',(req,res)=>{
    res.send('user add ok');
});
router.get('/del',(req,res)=>{
    res.send('user del ok');
});
module.exports=router;