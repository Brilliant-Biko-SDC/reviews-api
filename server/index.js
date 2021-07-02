const express = require("express");
const model = require("./models/model.js");
const app = express();
const port = 3158;
const routes = require("./routes.js");

app.use(express.json());

app.use("/api/reviews", routes);

// app.use("/api/reviews/meta", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
