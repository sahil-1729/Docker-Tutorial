const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.signup);

// router
//   .route("/:id")
//   .get(postController.getOnePost)
//   .patch(postController.updatePost)
//   .delete(postController.deletePost);

module.exports = router;
