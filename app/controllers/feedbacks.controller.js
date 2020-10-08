const db = require("../models");
const Feedback = db.feedbacks;
const Op = db.Sequelize.Op;

// Create and Save a new Feedback
exports.create = (req, res) => {
    // Validate request
    if (!req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


    // Create a Feedback
    const feedback = {
        feedback: req.body.feedback,
        date: req.body.date,
        by: req.body.by
    };

    // Save Feedback in the database
    Feedback.create(feedback)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Feedback."
            });
        });
};

// Retrieve all Feedback from the database.
exports.findAll = (req, res) => {
    const feedback = req.query.feedback;
    var condition = feedback ? { feedback: { [Op.like]: `%${feedback}%` } } : null;

    Feedback.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving feedbacks."
            });
        });
};

// Find a single Feedback with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Feedback.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving feedback with id=" + id
            });
        });
};

// Update a Feedback by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Feedback.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Feedback was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update feedback with id=${id}. Maybe Feedback was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};

// Delete a Feedback with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Feedback.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Feedback was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Feedback with id=${id}. Maybe Feedback was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Feedback with id=" + id
            });
        });
};

// Delete all Feedback from the database.
exports.deleteAll = (req, res) => {
    Feedback.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Feedback were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all feedbacks."
            });
        });
};
