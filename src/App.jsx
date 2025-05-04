import { useState } from "react";
import s from "./App.module.css";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import Searchbox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import dataContacts from "./data/contacts.json";

function App() {
  const [contacts, setContacts] = useState(dataContacts);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      {/* <SearchBox /> */}
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </Container>
  );
}

export default App;
