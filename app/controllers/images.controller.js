const db = require("../models");
const Image = db.images;
const Op = db.Sequelize.Op;

// Create and Save a new Image
exports.create = (req, res) => {
    // Validate request
    if (!req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Image
    const image = {
        url: req.body.url,
        description: req.body.description,
        image_categories_id: req.body.image_categories_id
    };

    // Save Image in the database
    Image.create(image)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Image from the database.
exports.findAll = (req, res) => {
    const description = req.query.url;
    var condition = description ? { description: { [Op.like]: `%${description}%` } } : null;

    Image.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Image with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Image.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
};

// Update a Image by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Image.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};

// Delete a Image with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Image.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

// Delete all Image from the database.
exports.deleteAll = (req, res) => {
    Image.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};

// Find all published Image
exports.findAllPublished = (req, res) => {
    Image.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};