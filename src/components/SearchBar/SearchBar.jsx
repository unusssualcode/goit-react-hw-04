import { IoIosSearch } from "react-icons/io";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const onSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.query.value;
    console.log(event.target.query);
    if (!value.query) {
      toast("Please enter search term!", {
        style: {
          color: "#ffffff",
          backgroundColor: "#FF8C00",
        },
      });
      return;
    }
    onSubmit(value);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.formik} onSubmit={onSearch}>
        <input
          className={css.inputs}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.btn} type="submit">
          <IoIosSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
}
