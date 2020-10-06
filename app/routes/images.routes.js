module.exports = app => {
    const images = require("../controllers/images.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Image
    router.post("/", images.create);
  
    // Retrieve all Images
    router.get("/", images.findAll);
  
    // Retrieve all Homepage Images
    router.get("/homepage", images.findAllHomepage);

    // Retrieve all Kitchen Images
    router.get("/kitchen", images.findAllKitchen);

    // Retrieve all Livingroom Images
    router.get("/livingroom", images.findAllLivingroom);

    // Retrieve all bath Images
    router.get("/bath", images.findAllBath);
  
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