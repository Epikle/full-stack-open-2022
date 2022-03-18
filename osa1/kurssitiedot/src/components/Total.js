const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.count[0].exercises +
        props.count[1].exercises +
        props.count[2].exercises}
    </p>
  );
};

export default Total;
