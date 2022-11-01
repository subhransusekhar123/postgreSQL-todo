const express = require('express');
const Router = express.Router();
const controller = require("../controller/controller");

Router.get( "/", controller.getController );
Router.get("/:id",controller.getIdController);
Router.post( "/post", controller.postController );
Router.put( "/put/:id", controller.putController );
Router.delete( "/delete/:id", controller.deleteController );


module.exports = Router