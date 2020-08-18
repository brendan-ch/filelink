const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const { saveFile } = require('./handleFiles');

const port = process.env.PORT || '9000';
app.set('port', port);

app.use(bodyParser.json())
app.use('/files', express.static(path.join(__dirname, 'files')));
app.use('/', express.static(path.join(__dirname, 'build')));
app.use(fileUpload());

app.post('/api/uploadFile', (req, res) => {
  console.log(req.files);
  const fileName = saveFile(req.files.file);

  res.send({
    fileName: fileName
  });
  res.status(200);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  res.status(200);
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
