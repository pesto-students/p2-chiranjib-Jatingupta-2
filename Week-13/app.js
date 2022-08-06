const express = require('express')
const app = express();
require('dotenv').config();
var routes = require('./routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',routes)

app.listen(process.env.PORT,()=>{
    console.log(`App running on ${process.env.PORT}`)
})