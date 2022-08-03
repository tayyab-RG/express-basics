const express = require('express');
const app = express();
const path = require('path');

const people = require('./routes/people');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/people', people);

app.listen(5000, () => {
    console.log("Server is listening at 5000");
});