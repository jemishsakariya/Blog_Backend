const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 4000;
//

const blog = require("./routes/blogRoutes");
// mount
app.use("/api/v1", blog);

//
app.listen(PORT, () => {
  console.log(`Server is started on PORT no. http://localhost:${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("<h1>This is my HomePage</h1>");
});
