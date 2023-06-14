const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    // fetch data from body
    const { post, user, body } = req.body;

    // create a comment object for database
    const comment = new Comment({ post, user, body });

    // save the new Comment into the database
    const savedComment = await comment.save();

    // find the post by ID, add the new comment to its commentss array
    // find by id of "post" then give new param to update "{$push}" = update
    // "comments" is in the Post Model
    // "$push: { comments: savedComment._id }" = update comment array with new given _id
    // "{ new: true }" = it returns updated document
    // populate is geting actual object(document) that related to id we can fetch that
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment._id },
      },
      { new: true }
    )
      .populate("comments")
      .exec(); //execute the query

    res.status(200).json({
      post: updatedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error While Creating Comment",
    });
  }
};
