import Part from "./Part";

const Content = ({ courses }) => {
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

export default Content;