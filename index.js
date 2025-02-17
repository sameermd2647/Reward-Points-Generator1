const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./models/config');
const receiptRouter = require('./routers/receiptRouter');
const port = 5002;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/receipts', receiptRouter);

const server = app.listen(port, function (req, res) {
  console.log(`Server is connected to the port ${port}`);
});

module.exports = server;
