const PostController = require("../controllers/Post.Controller");
const express = require("express");
const Router = express.Router();
const upload = require("../middleware/uploads");
// Router.post("/",PostController.create)
// Router.delete("/:id",PostController.delete) //ajouter le params
// Router.put("/:id",PostController.update)
Router.get("/", PostController.read);
Router.post("/", upload.single("file"),PostController.addPost);
// Router.get("/:id",PostController.findById)
module.exports = Router;
    