import { deletePerson } from '../services/persons';

const Persons = (props) => {
  const personsToShow = !props.searchPerson
    ? props.persons
    : props.persons.filter((person) =>
        person.name.toLowerCase().includes(props.searchPerson.toLowerCase())
      );

  const deleteBtnHandler = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      deletePerson(id).then(() => {
        props.setPersons(props.persons.filter((person) => person.id !== id));
        props.setMessage(`${name} removed`);
      });
    }
  };

  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}{' '}
          <button onClick={deleteBtnHandler.bind(null, person.id, person.name)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
