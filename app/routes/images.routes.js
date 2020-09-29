module.exports = app => {
    const images = require("../controllers/images.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Image
    router.post("/", images.create);
  
    // Retrieve all Images
    router.get("/", images.findAll);
  
    // Retrieve all published Images
    router.get("/published", images.findAllPublished);
  
    // Retrieve a single Image with id
    router.get("/:id", images.findOne);
  
    // Update a Image with id
    router.put("/:id", images.update);
  
    // Delete an Image with id
    router.delete("/:id", images.delete);
  
    // Delete all Images
    router.delete("/", images.deleteAll);
  
    app.use('/api/images', router);
  };