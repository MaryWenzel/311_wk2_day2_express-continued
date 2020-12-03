const comments = require('../data/comments');

// GET COMMENTS
const list = (req, res) => {
    res.json(comments)
};

// GET COMMENTS BY ID
const show = (req, res) => {
    const commentId = req.params.id
    for (let comment of comments){
        if (comment._id === parseInt(commentId)){
            res.json(comment)
        }
    }
  };

// CREATE NEW COMMENT
const create = (req, res) => {
    const newComment = {
      _id: comments.length + 1,
      body: req.body.body,
      postId: 1
    }
    
    if(!newComment.body){
      return res.status(400).json({ msg: "Please enter comment" });
    }
  
    comments.push(newComment)
    res.json(comments)
};

module.exports = {
  list,
  show,
  create
}