import s from "./ContactForm.module.css";

export const ContactForm = ({ onAdd }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onAdd({
      name: ev.target.elements.text.value,
      number: ev.target.elements.tel.value,
    });
    ev.target.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.inputLabel} htmlFor="text">
        <span className={s.spanForm}>Name</span>
        <input className={s.inputForm} type="text" name="text" id="text" />
      </label>
      <label className={s.inputLabel} htmlFor="tel">
        <span className={s.spanForm}>Number</span>
        <input className={s.inputForm} type="tel" name="tel" id="tel" />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
