
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const cors = require('cors');


//Iniciando o db
const app = express();
app.use((req, res, next) => {console.log(req.url); return next()});
app.use(express.json());
app.use(cors());



mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  { useNewUrlParser: true }
);


requireDir("./src/models");



app.use('/api',require('./src/routes'));

app.listen(3001);
