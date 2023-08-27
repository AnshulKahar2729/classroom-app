const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/test", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
