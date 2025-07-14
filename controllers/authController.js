const User = require("../models/userModel");

exports.signup = async (req, res) => {
  const newUser = await User.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

// exports.getOnePost = async (req, res, next) => {
//   const post = await Post.findById(req.params.id);

//   try {
//     res.status(200).json({
//       status: "success",
//       data: {
//         post,
//       },
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "fail",
//     });
//   }
// };

// exports.createPost = async (req, res, next) => {
//   const post = await Post.create(req.body);

//   try {
//     res.status(200).json({
//       status: "success",
//       data: {
//         post,
//       },
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "fail",
//     });
//   }
// };

// exports.updatePost = async (req, res, next) => {
//   const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   try {
//     res.status(200).json({
//       status: "success",
//       data: {
//         post,
//       },
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "fail",
//     });
//   }
// };

// exports.deletePost = async (req, res, next) => {
//   const post = await Post.findByIdAndDelete(req.params.id);

//   try {
//     res.status(200).json({
//       status: "success",
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "fail",
//     });
//   }
// };
