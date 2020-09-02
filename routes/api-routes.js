const router = require("express").Router();
const Workout = require("../models/workouts.js");

// Routes
// =============================================================
// Route for getting workout data from model
router.get("api/workouts", ({ body }, res) => {
  Workout.find(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

// Route for getting exercise data from model