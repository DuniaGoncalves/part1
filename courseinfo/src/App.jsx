const Header = ({ course }) => {
  console.log(course, course.name, 'header');
  return <h1>{course.name}</h1>;
}

const Part = ({ parts }) => {
  console.log(parts, "Part");
  return (
    <div>
      {parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
}

const Content = ({ course }) => {
  console.log(course, "content");
  return (
    <Part parts={course.parts} />
  );
}

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;