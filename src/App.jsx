import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
    </Container>
  );
}

export default App;
