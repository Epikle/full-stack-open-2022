const Total = ({ count }) => {
  const exercises = count.map((part) => part.exercises);
  const total = exercises.reduce((total, current) => total + current, 0);

  return <li>total of {total} exercises</li>;
};

export default Total;
