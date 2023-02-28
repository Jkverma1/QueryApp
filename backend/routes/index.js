// modules
const express = require("express");
const router = express.Router();
const query = require("../models/resultQuery");

router.get("/", async (res, req) => {
  const resultQuery = await query.find();
  res.json(resultQuery);
});

// Create new query
router.post('/new', async (req, res) => {
  
  const newQuery = new query(
    req.body // What the Vue App is sending
  ); 
  const savedQuery = await newQuery.save() // mongo save method
  res.json(savedQuery) // respond with json to our post endpoint
});

// Getter by id
router.get('/get/:id', async (req, res) => {
  const t = await query.findById({ _id : req.params.id })
  res.json(t)
})

// Delete a query by id
router.delete('/delete/:id', async (req, res) => {
  const tDelete = await query.findByIdAndDelete({ _id : req.params.id })
  res.json(tDelete)
})

// Update a query by id
router.put('/update/:id', async (req, res) => {
  const tUpdate = await query.updateOne(
    { _id: req.params.id }, 
    
    { $set: req.body }

  )
  res.json(tUpdate)
})

module.exports = router
