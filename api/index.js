const fs = require('fs')

exports.defaults = (req, res) => {
  fs.readFilesync(__dirname + '/../big1')
  fs.readFilesync(__dirname + '/../big2')
  fs.readFilesync(__dirname + '/../big3')
  res.send('hi')
}
