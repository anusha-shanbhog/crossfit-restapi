module.exports = {
    getRecordForWorkout: (workoutId) => {
      try {
        const record = Record.getRecordForWorkout(workoutId);
        return record;
      } catch (error) {
        throw error;
      }
    }
  };
  