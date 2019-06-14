const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const app = new express.Router();
const upload = multer(uploadConfig);

app.get('/posts', PostController.index);
app.post('/posts', upload.single('image') , PostController.store);

app.post('/posts/:id/like', LikeController.store);

module.exports = app;