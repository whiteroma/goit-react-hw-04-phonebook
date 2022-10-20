import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { Container } from './App.styled';
import { useState, useEffect, useRef } from 'react';
// import { Formik } from 'formik';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    return parsedContacts || [];
  });

  const [filter, setFilter] = useState('');

  // const usePrevious = (value) => {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   }, [value]);
  //   return ref.current;
  // }
  
  // const prevContacts = usePrevious(contacts);

  const formHandler = data => {
    const addedName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(data.name.toLowerCase());
    if (addedName) {
      alert(`${data.name} is already in a list`);
    } else {
      setContacts(prevState => [...prevState, data]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFiltered = () => {
    const normalised = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalised)
    );
  };

  const deleteButton = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = getFiltered();

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteButton}
        />
      </Container>
    </>
  );
}
