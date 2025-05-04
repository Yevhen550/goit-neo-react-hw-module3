import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <div className={s.card}>
      <div className={s.cardInfo}>
        <p className={s.name}>{contact.name}</p>
        <p className={s.number}>{contact.number}</p>
      </div>
      <button className={s.btn}>Delete</button>
    </div>
  );
};

export default Contact;
