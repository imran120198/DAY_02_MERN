// Using Callback
const fs = require("fs");

function readFilesCallback(filePaths, callback) {
  let aggregateData = "";

  function readFile(index) {
    if (index === filePaths.length) {
      callback(null, aggregateData);
      return;
    }

    fs.readFile(filePaths[index], "utf8", (err, data) => {
      if (err) {
        callback(err);
        return;
      }

      aggregateData += data;
      readFile(index + 1);
    });
  }

  readFile(0);
}

const filePaths = ["file1.txt", "file2.txt", "file3.txt"];

readFilesCallback(filePaths, (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }

  console.log("Aggregated data:", data);
});


