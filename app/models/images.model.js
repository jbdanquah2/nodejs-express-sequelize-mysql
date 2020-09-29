module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("image", {
      url: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image_categories_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Image;
  };