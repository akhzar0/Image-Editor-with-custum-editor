const express = require('express');
const router=express.Router();

router.post('/add',(req,res)=>{
    res.send('Responce from video add')
})
module.exports=router;