const db = require('./connect');
const mongoose = require('mongoose');//链接数据库
var Schema = mongoose.Schema;
var todoschema = new Schema({
    //这些根据需求自己写
  item:{type:String,required:true}
})
var Todos = mongoose.model('Todo',todoschema);
// console.log(todoschema)
module.exports = Todos