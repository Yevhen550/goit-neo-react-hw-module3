import s from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <form className={s.form}>
      <label htmlFor="text">
        <input type="text" name="name" id="text" />
      </label>
      <label htmlFor="email">
        <input type="email" name="email" id="email" />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
