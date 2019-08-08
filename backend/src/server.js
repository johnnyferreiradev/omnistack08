const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');


const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ft28b.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true // Remove o DeprecationWarning
});

server.use(express.json()); // Faz com que o express interprete requisições do tipo json com valores passados pelo body
server.use(routes);

server.listen(3333, () => {
    console.log('backend executando...');
})