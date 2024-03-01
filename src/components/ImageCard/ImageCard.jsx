import css from "./ImageCard.module.css";

export const ImageCard = ({
  imageCard: {
    likes,
    description,
    urls: { small },
    user: { last_name },
    links: { download },
  },
  openModal,
}) => {
  const handleDownloadClick = () => {
    window.open(download, "_blank");
  };

  return (
    <div>
      <img
        className={css.image}
        src={small}
        alt={description}
        onClick={openModal}
      />
      <div>
        <p>Likes: {likes}</p>
        <p>Author: {last_name}</p>
        <button onClick={handleDownloadClick}>Download</button>
      </div>
    </div>
  );
};
