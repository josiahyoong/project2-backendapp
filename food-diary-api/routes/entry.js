const express = require("express");
const router = express.Router();

const {create, readAll} = require("../controllers/entry-controller");

router.get("/", readAll);
router.post("/", create);

module.exports = {router};


// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//     res.json({message:"GET OK"})
// });

// router.post("/", (req, res) => {
//     res.json({message:"POST OK"})
// });

// module.exports = {router};