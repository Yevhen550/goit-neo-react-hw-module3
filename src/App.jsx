import { useState } from "react";
import s from "./App.module.css";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Searchbox from "./components/SearchBox/SearchBox";
import dataContacts from "./data/contacts.json";

function App() {
  const [contacts, setContacts] = useState(dataContacts);

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
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
