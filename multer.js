const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      const time = new Date().getTime();
      cb(null, `${file.originalname}_${time}`);
    }
  })
  
  const upload = multer({ storage: storage });

  module.exports = upload;