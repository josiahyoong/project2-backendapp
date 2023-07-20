require("dotenv").config(); 

const express = require("express");
const {router:EntryRouter} = require("./entry");

const app = express(); 
const port = process.env.PORT || 3330;

app.use(express.json()); // Add this line 
app.use("/entry", EntryRouter);

app.listen(port, ()=> console.log(`Listening to port ${port}`));


// const express = require("express");
// const {router:EntryRouter} = require("./entry");

// const app = express();
// const port = process.env.PORT || 3330;

// app.use("/entry", EntryRouter);

// app.listen(port, ()=> console.log(`Listening to port ${port}`));