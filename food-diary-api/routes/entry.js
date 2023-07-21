const express = require("express");
const router = express.Router();

const {create, readAll, remove} = require("../controllers/entry-controller");

router.get("/", readAll);
router.post("/", create);
router.delete("/delete/:id", remove); 
// =>{
//     // extract id from req.params
//     // pass the  extracted id to the function
//     console.log("Delete route called")
// })

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