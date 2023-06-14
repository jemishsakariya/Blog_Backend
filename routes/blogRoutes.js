const express = require("express");
const router = express.Router();

// import controller
const { likePost, unLikePost } = require("../controller/likeController");
const { createComment } = require("../controller/CommentController");
const { createPost, getAllPost } = require("../controller/PostController");

// Mapping Create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unLikePost);

// export
module.exports = router;
