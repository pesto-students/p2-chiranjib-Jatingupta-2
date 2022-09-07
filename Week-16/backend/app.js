const express = require('express')
const app = express();
require('dotenv').config();
var routes = require('./routes');
var bodyParser = require('body-parser');
// load the agent
const newrelic = require('newrelic');

// instrument express after the agent has been loaded
newrelic.instrumentLoadedModule(
  'express',    // the module's name, as a string
  expressModule // the module instance
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',routes)

app.listen(process.env.PORT,()=>{
    console.log(`App running on ${process.env.PORT}`)
})