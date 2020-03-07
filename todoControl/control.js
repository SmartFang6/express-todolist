var template = require('art-template');
const bodyParser = require('body-parser')
const Todos = require('../db/to')
// let data = [{item:'1'},{item:'2'},{item:'3'}]

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.get('/todo', (req, res) => {
    Todos.find({},(err,data)=>{ //第一个参数为取出所以内容
      if(err){
        console.log(err)
      }else{
        var html = template(__dirname + '/todo.html',{todos:data});
        res.send(html)
      }
    })
  });
  app.post('/todo', (req, res) => {
    Todos.insertMany(req.body,(err,data)=>{
      res.send(data)
    })
    // data.push(req.body)
  });
  app.delete('/todo/:item', (req, res) => {  //删除 :item为动态路由地址
    // data = data.filter((todo)=>{
    //   return todo.item.replace(/ /g, "-") !== req.params.item
    // })
    Todos.find({item:req.params.item.replace(/-/g, " ")}).deleteOne((err,data)=>{//先找到item是xxx的，然后再删除掉
      res.send(data)
    })  
  });
}