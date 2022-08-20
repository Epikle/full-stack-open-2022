import { useState } from 'react';
import { createPerson, updatePerson } from '../services/persons';

const PersonForm = (props) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addNew = (event) => {
    event.preventDefault();

    if (!newNumber || !newName) {
      alert('Empty name or number!');
      return;
    }

    const isExistingPerson = props.persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (isExistingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        updatePerson(isExistingPerson.id, newPerson)
          .then((returnedPerson) => {
            props.setPersons(
              props.persons.map((person) =>
                person.id !== isExistingPerson.id ? person : returnedPerson
              )
            );
            props.setMessage(`Updated number for ${newName}`);
            setNewName('');
            setNewNumber('');
          })
          .catch((err) => {
            props.setError(true);
            props.setMessage(
              `Information of ${newName} has already been removed from server`
            );
          });
      }
      return;
    }

    createPerson(newPerson).then((returnedPerson) => {
      props.setPersons(props.persons.concat(returnedPerson));
      props.setMessage(`Added ${newName}`);
      setNewName('');
      setNewNumber('');
    });
  };

  const nameHandler = (event) => {
    setNewName(event.target.value);
  };

  const numberHandler = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addNew}>
      <div>
        name: <input type="text" value={newName} onChange={nameHandler} />
      </div>
      <div>
        number: <input type="text" value={newNumber} onChange={numberHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
