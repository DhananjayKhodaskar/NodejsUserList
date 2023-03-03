const express = require('express');
const router =express.Router();
const userList = [];


router.post('/add-user' ,(req,res,next)=>{
    userList.push({name:req.body.userName});
    console.log(userList);
    res.redirect('/');

});

router.get('/users' ,(req,res,next)=>{
    res.render('users', {userArray : userList,title:'User List'});
});


module.exports = router;