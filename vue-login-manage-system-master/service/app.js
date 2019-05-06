const userApi = require('./api/user/userApi');
const saleApi = require('./api/sale/saleApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/user', userApi);
app.use('/api/sale', saleApi);

app.listen(3000);
console.log('success listen at port: 3000')