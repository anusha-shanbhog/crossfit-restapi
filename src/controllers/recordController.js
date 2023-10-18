const Record = require("../database/Record");

const getRecordForWorkout = (req, res) => {
  try {
    const workoutId = req.params.workoutId;
    const record = Record.getRecordForWorkout(workoutId);
    res.json(record); // Send the record as a JSON response.
  } catch (error) {
    res.status(500).json({ error: "Internal server error" }); // Handle errors appropriately.
  }
};

module.exports = {
  getRecordForWorkout,
};
