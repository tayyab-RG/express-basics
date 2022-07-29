const express = require('express');
const app = express();
const path = require('path');

const products = require('./routes/products');
const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/products', products);
app.use('/api/people', people);
app.use('/login', auth);

app.get('/navbar', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.get('/', (req, res) => {
    res.send('<h1>Hope Page</h1><a href="/api/products">Products</a>');
});

app.listen(5000, () => {
    console.log("Server is listening at 5000");
});