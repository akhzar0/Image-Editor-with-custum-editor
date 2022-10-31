// To form databse operations on the user data
const express = require('express');
const router=express.Router();
const Model=require('../models/usermodel');
// user request access (userrouter)
router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model (req.body).save()
    .then((result) =>{
        res.json(result);
        
    }).catch((err) => {
        // res.json(err);
        res.status(500).json(err);
        
    });
})
router.get('/getall',(req,res)=>{
    // reading the data from the data base
    // find
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});
// denote url parameter
router.get('/getbyemail/:email',(req,res)=>{
    Model.find({email: req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) =>{
        res.json(err);
    });
});
// delete
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

router.post('/authenticate', (req, res) => {

    const formdata = req.body;

    Model.findOne({email : formdata.email, password : formdata.password})
    .then((result) => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(401).json({status : 'login failed'});
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

})
module.exports=router;
