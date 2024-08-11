
const mongoose = require('mongoose');


PostSchema = new mongoose.Schema({
  content:{ 
    type: String,
    required: true 
    },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true 
    },
  createdAt:{
    type: Date, 
    default: Date.now
    },
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post ;
