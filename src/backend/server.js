require('dotenv').config();
const express = require('express'),
    db = require('./queries/queries'),
    bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
    next();
});

app.get('/users', db.getUsers);
app.get('/users/:name/:email', db.getUser);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.get('/transactions', db.getTransactions);
app.get('/transactions/count', db.getTransactionsCount);
app.get('/transactions/:id', db.getTransactionById);
app.get('/transactions/user/:id/:limit/:offset', db.getTransactionsByUserId);
app.post('/transactions', db.createTransaction);
app.put('/transactions/:id', db.updateTransaction);
app.delete('/transactions/:id', db.deleteTransaction);

app.listen(PORT, () => {
    console.log(PORT);
});

