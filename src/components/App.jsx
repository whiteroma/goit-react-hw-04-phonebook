import React from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { Container } from './App.styled';
import { useState } from 'react';
// import { Formik } from 'formik';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const formHandler = data => {
    const addedName = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(data.name.toLowerCase());
    if (addedName) {
      alert(`${data.name} is already in a list`);
    } else {
      setContacts(prevState => ([...prevState.contacts, data]));
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
    setContacts(prevState => (prevState.contacts.filter(contact => contact.id !== contactId)
    ));
  };

  
  const componentDidUpdate = (prevProps, prevState) => {
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  const componentDidMount = () => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }

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



// export class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   formHandler = data => {
//     const addedName = this.state.contacts
//       .map(contact => contact.name.toLowerCase())
//       .includes(data.name.toLowerCase());
//     if (addedName) {
//       alert(`${data.name} is already in a list`);
//     } else {
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, data],
//       }));
//     }
//   };

//   changeFilter = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   getFiltered = () => {
//     const { contacts, filter } = this.state;

//     const normalised = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalised)
//     );
//   };

//   deleteButton = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFiltered();
//     return (
//       <>
//         <Container>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={formHandler} />
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             contacts={filteredContacts}
//             onDeleteContact={this.deleteButton}
//           />
//         </Container>
//       </>
//     );
//   }
// }

// contacts: [...prevState.contacts, data],
