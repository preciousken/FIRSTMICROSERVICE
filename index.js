
const  dotenv = require("dotenv");
const  express = require("express");
const router = require('./routes/url')


// database connection
require('./db/connect')

// configure dotenv
dotenv.config();
const app = express();

app.get('/',(req,res)=>{
    res.json({
      guide: ' go ahead and redirect at http://shorten-url-y792.onrender.com/:urlId'
    })
  })

// middleware goes in here
app.use(express.json());
app.use('/',router)

const port = process.env.PORT || 3333

app.listen(port,()=>{
 console.log(`
 App listening on port ${port}
 `)
})
