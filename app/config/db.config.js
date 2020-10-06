module.exports = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "b2114a871c2fd1",
    PASSWORD: "a960e0be",
    DB: "heroku_cf7b0ffad698692",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    } 
  };

  mysql://b2114a871c2fd1:a960e0be@us-cdbr-east-02.cleardb.com/heroku_cf7b0ffad698692?reconnect=true