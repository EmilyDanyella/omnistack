const express = require('express');
const uploadConfig = require('./config/upload');
const multer = require('multer');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const router = express.Router();
const upload = multer(uploadConfig);

router.get("/posts", PostController.index);
router.post("/posts", upload.single('image'),PostController.store);

router.post("/posts/:id/like", LikeController.store);
module.exports = router;