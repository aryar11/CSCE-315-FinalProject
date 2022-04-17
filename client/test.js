//import {parkName} from './searchResults.js';
//const importFile = require ('./searchResults.js');
//console.log(importFile.parkName);

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 4444;
const router = express.Router();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


router.get("/", (req, res)=>{
  res.render("searchResult", {parkNamePug: parkName});
});

router.use(express.static(__dirname + '/'));

/*app.get("/Style1.css", (req, res)=>{
  res.sendFile(path.join(__dirname+'/Style1.css'));
});
app.use(express.static(__dirname + '/'));*/
//app.use(express.static(__dirname + '/'));

/*app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname+'/searchResult.html'));
});*/

/*app.get("/safety.html", (req, res)=>{
  res.sendFile(path.join(__dirname+'/safety.html'));
});

app.get("/search.html", (req, res)=>{
  res.sendFile(path.join(__dirname+'/search.html'));
});

app.get("/plan.html", (req, res)=>{
  res.sendFile(path.join(__dirname+'/plan.html'));
});

app.get("/index.html", (req, res)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static(__dirname + '/'));*/


app.use('/', router);
app.listen(port, err =>{
  if(err){
    return console.log("error", err);
  }
});