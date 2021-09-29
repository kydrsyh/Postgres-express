const express = require('express');
const app = express();
var indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.listen(3000, () => {
  console.log("Listening on port 3000")
});

module.exports = app;