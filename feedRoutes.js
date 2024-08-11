const express = require('express')
const router = express.Router();


router.get('/feed/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await User.findById(userId).populate('friends');
     
      const friendPosts = await Post.find({ author: { $in: user.friends } }).sort({ createdAt: -1 });
  
  
      const commentedPosts = await Comment.find({ author: { $in: user.friends } })
        .populate({
          path: 'post',
          populate: { path: 'author' }
        })
        .then(comments => comments.map(comment => comment.post))
        .filter(post => !user.friends.includes(post.author._id));
        
      
      const combinedPosts = [...friendPosts, ...commentedPosts].sort((a, b) => b.createdAt - a.createdAt);
      
      res.json(combinedPosts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;