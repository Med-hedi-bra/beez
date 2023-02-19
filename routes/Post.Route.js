const PostController=require("../controllers/Post.Controller");
const express=require("express")
const Router=express.Router();
// Router.post("/",PostController.create)
// Router.delete("/:id",PostController.delete) //ajouter le params
// Router.put("/:id",PostController.update)
Router.get("/",PostController.read)
Router.post("/",PostController.addPost)
// Router.get("/:id",PostController.findById)
module.exports=Router;  