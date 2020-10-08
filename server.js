const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync(
  // { force: true }
  ).then(() => {
    // console.log("Drop and re-sync db.");
    console.log("suynced with db");
  });

// simple route
app.get("/", (req, res) => {
  res.json( {msg:"Welcome to jbdanquah node rest api."} );
});

require("./app/routes/images.routes")(app);
require("./app/routes/feedbacks.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
