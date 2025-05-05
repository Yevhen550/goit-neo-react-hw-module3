import s from "./SearchBox.module.css";

const Searchbox = () => {
  return (
    <div className={s.searchBox}>
      <h2 className={s.searchTitle}>Find contacts by name</h2>
      <label>
        <input className={s.searchInput} type="text" name="text" />
      </label>
    </div>
  );
};
export default Searchbox;
