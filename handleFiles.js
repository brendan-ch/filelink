const path = require('path');
const fs = require('fs');
const filesDir = path.join(__dirname, "files");

const saveFile = (file) => {
  console.log(file);

  let name = file.name;
  
  const nameArray = name.split(".");
  const type = nameArray.slice(-1)[0];

  const id = Math.round(Math.random() * 1000000000);
  name = id.toString() + "." + type;

  const filePath = path.join(filesDir, name);
  console.log(filePath);

  console.log(name);

  fs.writeFile(filePath, file.data, (err, result) => {
    if (err) console.error(`Error: ${err}`);
  });

  return name;
};

module.exports.saveFile = saveFile;