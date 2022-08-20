import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import { getAllPersons } from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchPerson, setSearchPerson] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  // npx json-server --port=3001 --watch db.json
  useEffect(() => {
    getAllPersons().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={message}
        setMessage={setMessage}
        error={error}
        setError={setError}
      />
      <Filter setSearchPerson={setSearchPerson} value={searchPerson} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setError={setError}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchPerson={searchPerson}
        setPersons={setPersons}
        setMessage={setMessage}
      />
    </div>
  );
};

export default App;
