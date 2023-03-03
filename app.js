const express = require('express');
const userRoute = require('./routes/users');
const bodyParser =require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views' , 'views');
app.use(express.static(path.join(__dirname,'public')));
app.use(userRoute);
 

app.get('/' ,(req,res,next)=>{

    res.render('home');

});

app.listen(3000); 