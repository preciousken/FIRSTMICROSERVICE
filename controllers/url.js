const shortid = require('shortid');
const  utils = require("../utils/util");
const  Url = require("../models/url");

const Short = async (req, res) => {
 console.log("HERE",req.body.url);
 const { origUrl } = req.body;
//   const base = process.env.DOMAIN_URL
 const base = req.protocol+'://'+req.hostname;

 const urlId = shortid.generate();
 if (utils.validateUrl(origUrl)) {
   try {
     let url = await Url.findOne({ origUrl });
     if (url) {
       res.json(url);
     } else {
       const shortUrl = `${base}/${urlId}`;
// don't shorten the one from the website
      
       url = new Url({
        origUrl,
        shortUrl,
        urlId,
        date: new Date(),
      });
      await url.save();
      res.json(url);
      }
   } catch (err) {
     console.log(err);
     res.status(500).json('Server Error');
   }
 } else {
   res.status(400).json('Invalid Original Url');
 }
}

module.exports = {Short}