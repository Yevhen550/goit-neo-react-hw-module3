import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

export const ContactForm = ({ onAdd }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const number = ev.target.elements.number.value;

    onAdd({
      id: nanoid(),
      name,
      number,
    });

    ev.target.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.inputLabel} htmlFor="name">
        <span className={s.spanForm}>Name</span>
        <input
          className={s.inputForm}
          type="text"
          name="name"
          id="name"
          required
        />
      </label>
      <label className={s.inputLabel} htmlFor="number">
        <span className={s.spanForm}>Number</span>
        <input
          className={s.inputForm}
          type="tel"
          name="number"
          id="number"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
