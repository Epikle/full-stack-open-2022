const Part = ({ content }) => {
  return (
    <li>
      {content.name} {content.exercises}
    </li>
  );
};

export default Part;
