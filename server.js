
const express = require('express')
// 
const { timeWork } = require('./middleware/date.middleware') // verify time worked
const { dateParser  } = require('./src/Utils')  // format date
// 
var app = express();
const PORT = 3000
// 
app.set('view engine', 'pug')
app.set('views', './views')


//  ----------- to do  Exo ------------ 
// * The web application is only available during working hours (Monday to Friday,  from 9 to 19), Go to the './middleware/date.middleware.js' file 



// ----- ROUTE OF PAGE PUG -----
app.get('/', timeWork, function(req, res){
  
  res.render('home' , { })
});

app.get('/service', timeWork, function(req, res){
  res.render('service')
});

app.get('/contact', function(req, res){
  res.render('contact')
});

app.post('/sendMessage', (req, res) => {
  // const {email , message} = req.body;

  console.log('message are send')
  res.status(201).send('message are send')
});


app.listen(PORT , ()=> {
    console.log("At:" ,dateParser(new Date)) 
    console.log('server are started on : ' + PORT);
})