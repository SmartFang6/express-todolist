const express = require('express');
const path = require('path')
const routers = require('./todoControl/control')
let app = express()

// app.use(express.static(path.join(__dirname,'./static')))
routers(app)
app.use('/static',express.static(path.join(__dirname,'/static')))
app.listen(8000,()=>{
  console.log('start!')
})