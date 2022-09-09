const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');

const {
    getAllTodos
} = require('./APIs/todos')


app.get('/todos', cors(), getAllTodos);


console.log(app)
exports.api = functions.https.onRequest(app);