const SubjectController = require("../controllers/Subject.Controller");
const express = require("express");
const Router = express.Router();
Router.post("/", SubjectController.create);
Router.delete("/:id", SubjectController.delete); //ajouter le params
Router.put("/:id", SubjectController.update);
Router.get("/", SubjectController.read);
Router.get("/:id", SubjectController.findById);
module.exports = Router;
    