import Header from './Header';
import Content from './Content';

const Course = (props) => {
  return (
    <>
      <Header text="Web development curriculum" />
      <Content parts={props.course} />
    </>
  );
};

export default Course;
