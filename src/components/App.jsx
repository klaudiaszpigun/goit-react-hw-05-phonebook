import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import '../index.css';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const saveToState = event => {
    if (
      !contacts.some(
        contact => contact.name === name || contact.number === number
      ) &&
      name.trim() !== '' &&
      number.trim() !== ''
    ) {
      const newContact = { id: nanoid(), name: name, number: number };
      setContacts([...contacts, newContact]);
      saveToLocalStorage([...contacts, newContact]);
    } else {
      alert(`User is already in contacts`);
      setName('');
      setNumber('');
    }
  };

  const saveToName = event => {
    if (event.target.value.trim() !== '') {
      setName(event.target.value.trim());
    }
  };

  const saveToNumber = event => {
    if (event.target.value.trim() !== '') {
      setNumber(event.target.value.trim());
    }
  };

  const filterEvent = event => {
    setFilter(event.target.value);
  };

  const deleteContact = id => {
    // poprzedni stan
    setContacts(prevContacts =>
      // nowy stan, bez kontaktu o id takim jak w parametrze
      prevContacts.filter(contact => contact.id !== id)
    );
    saveToLocalStorage(contacts.filter(contact => contact.id !== id));
  };

  const saveToLocalStorage = updatedContacts => {
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="div">
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          saveName={saveToName}
          saveNumber={saveToNumber}
          saveState={saveToState}
        />
        <h2>Contacts</h2>
        <Filter filter={filterEvent} />
        <ContactList contacts={filteredContacts} deleteEvent={deleteContact} />
      </div>
    </div>
  );
};
