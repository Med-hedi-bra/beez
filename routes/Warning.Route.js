const WarningController = require("../controllers/Warning.Controller");
const express = require("express");
const Router = express.Router();
Router.post("/", WarningController.create);
Router.delete("/:id", WarningController.delete); //ajouter le params
Router.put("/:id", WarningController.update);
Router.put("/id/:id", WarningController.wellReceived);
Router.get("/", WarningController.read);
Router.get("/:id", WarningController.findById);
Router.get("/last", WarningController.getTheLast);
module.exports = Router;
