const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

//get route ============================================
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});
//post route ===========================================
router.post("/api/burgers", (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
  burger.insertOne(req.body.burger_name, req.body.devoured, (result) => {
    //res.json({ id: result.insertId });
    res.redirect("/");
  });
});

//put route ============================================
router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log("Burger devoured!");

  burger.updateOne(
    req.body.devoured, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//delete route =========================================
router.delete("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(
    condition, (result) => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

});

// Export routes for server.js to use.
module.exports = router;