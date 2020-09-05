const router = require("express").Router();
// Requiring our Workout model to handle API requests
const Workout = require("../models/workouts.js");

// Routes
// =============================================================
// Route for getting workout data from model
router.get("/api/workouts", (req, res) => {
  Workout.find(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

// Route for posting workout data 
router.post("/api/workouts", ( { body }, res) => {
  Workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

// Route for updating workout data 
router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate ({
    _id: req.params.id
  }, {
    $push: { exercises: req.body }
  })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
  
});

// Route for getting workouts in range
router.get("/api/workouts/range", ({ body }, res) => {
  Workout.find(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});


module.exports = router