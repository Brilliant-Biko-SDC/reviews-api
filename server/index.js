const express = require("express");
const model = require("./models/model.js");
const app = express();
const port = 3158;
const routes = require("./routes.js");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  return next();
});

app.use(express.json());

app.use("/api/reviews", routes);

// app.use("/api/reviews/meta", routes);

app.post("/api/reviews", routes);

app.get("/loaderio-bae1cb27e00f112fd1a5c8aae7de8775.txt", (req, res) => {
  res.send("loaderio-bae1cb27e00f112fd1a5c8aae7de8775");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
