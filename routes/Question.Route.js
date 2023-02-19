const QuestionController=require("../controllers/Question.Controller");
const express=require("express")
const Router=express.Router();
Router.post("/",QuestionController.create)
Router.delete("/:id",QuestionController.delete) //ajouter le params
Router.put("/:id",QuestionController.update)
Router.get("/",QuestionController.read)
Router.get("/:id",QuestionController.findById)
module.exports=Router;  