const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://select:select@cluster0-4q6ka.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

const app = express();

app.use(require('./routes'));

app.listen(3333);