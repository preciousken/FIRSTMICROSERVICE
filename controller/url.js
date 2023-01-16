const Url = require('../model/url')

// redirect endpoint
const Redirect = async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    // console.log(url)
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.origUrl);
    } else res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
 }

 module.exports = {Redirect}