const path = require('path');
const config = require('../config/config');

const processImage=async (req, res,next) => {
    const file = req.file;
    const port=config.port
    const fileUrl = new URL(path.join(`http://localhost:${port}`, 'uploads', path.basename(file.path))).toString();
  
    req.body.profilePicture=fileUrl
   
   next()
  }

  module.exports={processImage}