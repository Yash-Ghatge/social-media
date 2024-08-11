
const mongoose = require('mongoose');


commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
   },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true 
   },
  post:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
    },
  createdAt:{
    type: Date,
    default: Date.now 
   },
});

const comment = mongoose.model('Comment', commentSchema);
module.exports = comment;