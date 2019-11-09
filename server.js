const express = require('express');
const jsonServer = require('json-server');

const app = express();

app.use('/api', jsonServer.router('db.json'));

app.listen(8080);