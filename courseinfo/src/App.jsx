const Header = ({ courses }) => {
  console.log(courses, "header");
  return <h1>{courses[0].name}</h1>;
}

const Part = ({ parts }) => {
  console.log(parts, "parts")
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

const Content = ({ courses }) => {
  console.log(courses, "content")
  return (
    <>
     {courses.map((course) => (
       <div key={course.id}>
          <h3>{course.name}</h3>
          <Part parts={course.parts} />
        </div>
      ))}
    </>
  );
}

const Total = ({ courses }) => {
  const totalExercises = courses.reduce((total, course) => {
    return total + course.parts.reduce((sum, part) => sum + part.exercises, 0);
  }, 0);

  return <p><b>Total number of exercises:</b> {totalExercises}</p>;
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Header courses={courses} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
}

export default App;