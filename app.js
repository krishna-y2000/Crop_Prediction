var express = require('express');
var app = express();
const cors = require("cors");
var PORT = process.env.PORT || 5000;
var indexRouter = require('./routes/main');
app.use('/', indexRouter);

app.listen(PORT ,() => { console.log(`Running on server port ${PORT}`) } );