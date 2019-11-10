const app = require('express')();
const https = require('https');
const fs = require('fs');
const jsonServer = require('json-server');
var cors = require('cors');

app.use(cors());

app.use('/', jsonServer.router('db.json'));

// we will pass our 'app' to 'https' server
https.createServer({
    key: fs.readFileSync('./privateKey.key'),
    cert: fs.readFileSync('./certificate.crt'),
    passphrase: 'TechRes'
}, app).listen(3000);