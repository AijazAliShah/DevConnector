const express = require("express");
const mongoose = require("mongoose");

const users = require('./routes/api/Users');
const profile = require('./routes/api/Profile');
const posts = require('./routes/api/Posts');

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));

//set routes
app.use('/api/Users', users);
app.use('/api/Profile', profile);
app.use('/api/Posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
