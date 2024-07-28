if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(require("./routes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;