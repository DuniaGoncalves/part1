const Total = ({ courses }) => {
  const totalExercises = courses.reduce((total, course) => {
    return total + course.parts.reduce((sum, part) => sum + part.exercises, 0);
  }, 0);

  return <p><b>Total number of exercises:</b> {totalExercises}</p>;
}

export default Total;