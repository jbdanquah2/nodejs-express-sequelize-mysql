module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("feedback", {
      feedback: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      by: {
        type: Sequelize.STRING
      }
    });
  
    return Feedback;
  };