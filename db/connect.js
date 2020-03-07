const mongoose = require('mongoose');//链接数据库
mongoose.connect('mongodb://localhost/todo',{ useNewUrlParser: true,useUnifiedTopology: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('db ok')
});
module.exports = db
// var Schema = mongoose.Schema;
// var todoschema = new Schema({
//     //这些根据需求自己写
//   item:{type:String,required:true}
// })
// var Todos = mongoose.model('Todo',todoschema);
// // console.log(todoschema)
// module.exports = Todos