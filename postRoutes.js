const express = require('express')
const router = express.Router();
const Post = require("./models/PostSchema");
const Comment = require("./models/commentsSchema");


router.post('/posts', async (req, res) => {
    const { content, authorId } = req.body;
    try {
      const post = new Post({ content, author: authorId });
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});


router.post('/posts/comments', async (req, res) => {
    const { content, authorId, postId } = req.body;
    try {
      const comment = new Comment({ content, author: authorId, post: postId });
      await comment.save();
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

module.exports = router;