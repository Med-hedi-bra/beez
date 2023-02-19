const ResponseController = require("../controllers/Response.Controller");
const express = require("express");
const Router = express.Router();
// Router.post("/",ResponseController.create)
// Router.delete("/:id",ResponseController.delete) //ajouter le params
// Router.put("/:id",ResponseController.update)
Router.get("/", ResponseController.read);
Router.post("/", ResponseController.addResponse);
// Router.get("/:id",ResponseController.findById)
module.exports = Router;
