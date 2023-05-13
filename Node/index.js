const express = require("express");
const cors = require('cors');
const { getUsers } = require("./services/users");
const app = express();
const port = 8081;
app.use(express.json());
app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", async (req, res) => {
  res.json({ message: "ok" });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});