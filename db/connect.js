const mongoose = require('mongoose')
require('dotenv').config()

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Db Connected`);
  })
  .catch((err) => {
    console.log(err.message);
  });
