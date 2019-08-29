var express = require('express');
var router = express.Router();

var db = [];

/* GET home page. */
var index = router.get('/', function(req, res) {
  res.render('index.html')
});

/* Mew Task */
var task = router.get('/newTask', function (req,res) {
    res.render('newTask.html')
});

/* List Tasks */
var listtask = router.get('/listTasks', function(req, res){
   res.render('listTasks.html', {tasks : db});
});

router.post('/addtask', function(req, res){
  var data = {
      name: req.body.name,
      due: req.body.due,
      desc: req.body.desc
  };
  db.push(data);
  res.render('newTask.html');
});


module.exports = router;

