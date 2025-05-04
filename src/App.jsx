import { useState } from "react";
import s from "./App.module.css";
import Container from "./components/Container/Container";
import ContactList from "./components/ContactList/ContactList";
import Searchbox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import dataContacts from "./data/contacts.json";

function App() {
  const [contacts, setContacts] = useState(dataContacts);

  const addContact = (newContact) => {};

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {/* <SearchBox /> */}
      <ContactList contacts={contacts} />
    </Container>
  );
}

export default App;
