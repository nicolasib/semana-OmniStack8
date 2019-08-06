const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

server.use(cors());

mongoose.connect('mongodb+srv://root:root@cluster0-r4ivy.mongodb.net/omnisteck8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);


server.listen(1252);