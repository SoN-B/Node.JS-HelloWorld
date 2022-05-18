//index.js
var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(req,res){
  res.render('hello',{name:req.query.nameQuery});
})

app.get('/hello/:nameParam', function(req,res){ // 3
  res.render('hello', {name:req.params.nameParam});
});

app.listen(3000, () => {
  console.log('server on!');
});