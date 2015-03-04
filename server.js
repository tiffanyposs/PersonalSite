var express = require ('express');
// var bodyParser = require ('body-parser');
// var cors = require('cors')
// var ejs = require ('ejs')
// var request = require ('request');
var app = express();


app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());

app.get('/', function(req, res){
	res.render('index.ejs')
})

app.get('/:name', function(req, res){
	var file_name = req.params.name + ".ejs";
	res.render(file_name)
})


//the general project file
app.get('/project/:id', function(req, res){
	var project_id = req.params.id + ".ejs";
	res.render("project/" + project_id)
})


//to get specific projects
app.get('/project/:id1/:id2', function(req, res){
	var path = req.params.id1
	var file = req.params.id2 + ".ejs"
	res.render("project/" + path + "/" + file)
})

app.listen(3000)