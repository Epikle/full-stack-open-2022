import Part from './Part';
import Total from './Total';

import './Content.css';

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <ul>
            {course.parts.map((part) => (
              <Part key={part.id} content={part} />
            ))}
            <Total count={course.parts} />
          </ul>
        </div>
      ))}
    </>
  );
};

export default Content;
