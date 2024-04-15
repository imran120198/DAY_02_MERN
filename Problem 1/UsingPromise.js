const fs = require("fs/promises");

async function readFilesAsync(filePaths) {
  let aggregateData = "";

  for (const filePath of filePaths) {
    try {
      const data = await fs.readFile(filePath, "utf8");
      aggregateData += data;
    } catch (err) {
      throw err;
    }
  }

  return aggregateData;
}

const filePaths = ["file1.txt", "file2.txt", "file3.txt"];

readFilesAsync(filePaths)
  .then((data) => {
    console.log("Aggregated data:", data);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
