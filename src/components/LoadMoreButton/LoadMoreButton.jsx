import css from "./LoadMoreButton.module.css";

export const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  );
};
