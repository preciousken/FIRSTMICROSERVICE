
const  dotenv = require("dotenv");
const  express = require("express");
const  cors = require("cors");
const  mongoose = require("mongoose");
const  shortid = require("shortid");
const  utils = require("./utils/util");
const router = require('./routes/url')


// database connection
require('./db/connect')

// configure dotenv
dotenv.config();
const app = express();

// cors for cross-origin requests to the frontend application
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());



  // base URL
  app.get('/',(req,res)=>{
    res.json({
      baseURL: 'You are welcome to '+req.protocol+'://'+req.hostname+' go ahead and shorten at /short'
    })
  })

  // Middleware
  app.use("/",router);


// Port Listenning on 3333
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});

