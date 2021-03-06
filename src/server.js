'use strict';

const express = require('express');
const pageNotFound=require('./error-handler/404');
const errorHandller=require('./error-handler/500');
const app = express();
const userAuth = require('./routes/authroute')
app.use(userAuth)

app.use(express.json());

app.get('/', (req,res)=>{
  res.send("Welcome To my Server")
})
app.use(errorHandller);
app.use('*',pageNotFound);

function start(port) {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}

module.exports={
  app:app, 
  start:start,  
};