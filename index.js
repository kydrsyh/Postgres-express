const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config');
var indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);


app.listen(config.port, () => {
  console.log("Listening on port " + config.port)
});

module.exports = app;