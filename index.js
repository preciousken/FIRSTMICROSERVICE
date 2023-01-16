
const  dotenv = require("dotenv");
const  express = require("express");
const router = require('./routes/url')


// database connection
require('./db/connect')

// configure dotenv
dotenv.config();
const app = express();

// middleware goes in here
app.use(express.json());
app.use('/',router)

const port = process.env.PORT || 3333

app.listen(port,()=>{
 console.log(`
 App listening on port ${port}
 `)
})