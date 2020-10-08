module.exports = app => {
    const feedbacks = require("../controllers/feedbacks.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Feedback
    router.post("/", feedbacks.create);
  
    // Retrieve all Feedback
    router.get("/", feedbacks.findAll);
  
    // Retrieve a single Feedback with id
    router.get("/:id", feedbacks.findOne);
  
    // Update a Feedback with id
    router.put("/:id", feedbacks.update);
  
    // Delete an Feedback with id
    router.delete("/:id", feedbacks.delete);
  
    // Delete all Feedback
    router.delete("/", feedbacks.deleteAll);
  
    app.use('/api/feedbacks', router);
  };