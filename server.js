const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 3301;
const app = express();
const url = "mongodb://localhost:myTask";
const url_online =
  "mongodb+srv://AuthClass:AuthClass@codelab.u4drr.mongodb.net/test24?retryWrites=true&w=majority";

const CodeLab = require("./MVC/controller");

mongoose
  .connect(url_online, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`server is can connected to DataBase 👍 and working 💯`);
  });

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("This is my Landing page of API");
});

app.use("/api/", CodeLab);

app.listen(port, () => {
  console.log(`server is ready to rock 🚀 on port: ${port}`);
});
