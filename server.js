const express = require("express");
const cors = require("cors");
const { uploadImage } = require("./upload");
const app = express();
const port = 8000;

app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cors());

app.post("/api/upload", uploadImage, (req, res) => {
  if (!req.file) {
    return res.status(422).send({
      status: 422,
      message: "file required",
    });
  }
  res.status(200).send({
    status: 200,
    response: req.file,
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
