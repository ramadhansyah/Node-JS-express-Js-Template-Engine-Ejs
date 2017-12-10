var express = require("express");
var app 	= express();
var router 	= express.Router();
var server  = require('http').createServer(app);
var port    = process.env.PORT || 304;

app.use(express.static(__dirname + '/assets'));
/*set Template Egine */
app.set('view engine', 'ejs');


app.get('/', (req, res)=> {
    res.render('page/beranda');
});
app.get('/profil', (req, res)=> {
    res.render('page/profil');
});
app.get('/contect', (req, res)=> {
    res.render('page/contect');
});
app.use('*',(req,res)=>{
	res.render('page/note_found');
});
server.listen(port,  ()=> {
  console.log('Server listening at port %d', port);
});