const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const postSchema = new Schema({
  content: String,
  creatorId: {type : Schema.Types.ObjectId, ref: 'User' },
  picPath: String,
  picName: String,
  comment: [{type : Schema.Types.ObjectId, ref: 'Comment' }],
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
