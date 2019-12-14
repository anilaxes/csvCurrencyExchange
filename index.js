const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');


const currency = require('./currency')
var multer = require('multer');
var multipartupload = multer().any();
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});


app.post('/doc/generate/:CURRENCY_CODE?',multipartupload, currency.generateDoc);

app.listen(port, () => {
    console.log('Server is running on port:', port);    
});