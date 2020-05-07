const cors = require('cors');
const express = require('express');
const http = require('http');
var mongoose = require('mongoose');

require('./models/user.model');

const accountsRouter = require('./routes/accounts');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/accounts', accountsRouter);

var connectionString = 'mongodb://localhost/prisports';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
var dbConnection = mongoose.connection;

dbConnection.once('open', () => {
    console.log(`Connected to ${connectionString}...`);
});
dbConnection.on('error', () => {
    console.error(`Error: Couldn't connect to ${connectionString}!`);
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/...`);
});