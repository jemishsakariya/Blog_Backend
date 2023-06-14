const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const savedLike = await like.save();

    // update the post collection basis on this
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: savedLike._id },
      },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.status(200).json({
      post: updatedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error While Liking Post",
    });
  }
};

exports.unLikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // find and delete like collection
    const deleteLike = await Like.findOneAndDelete({ post: post, _id: like });

    // update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { likes: deleteLike._id },
      },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.status(200).json({
      post: updatedPost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error While Unliking Post",
    });
  }
};
