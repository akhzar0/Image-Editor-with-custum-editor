// To form databse operations on the user data
const express = require('express');
const router=express.Router();
const Model=require('../models/filterModel');
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

router.get('/getbyuser/:id',(req,res)=>{
    Model.find({user: req.params.id})
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
module.exports=router;
