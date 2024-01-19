import Header from "./Header";
import Total from "./Total";
import Content from "./Content";


const Course = ({ courses }) => {
  return (
    <div>
      <Header courses={courses} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
}

export default Course;