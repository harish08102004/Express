const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/courses", (req, res) => {
  const url =
    "https://raw.githubusercontent.com/PatelNeelMahesh/mern_perp/main/node/courses.json";

  axios
    .get(url)
    .then((response) => {
      const coursesData = response.data;
      res.json(coursesData.kalvium);
    })
    .catch((error) => {
      console.error(`Error retrieving data: ${error.message}`);
      res.status(500).send("Error retrieving data");
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
