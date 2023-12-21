const Header = (props) => {
  return <h1>{props.course}</h1>;
}

const Part = ({ parts }) => {
  console.log(parts, "Part");
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
}

const Content = ({ parts }) => {
  console.log(parts, "content");
  return (
    <div>
      <Part parts={parts} />
    </div>
  );
}


const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
