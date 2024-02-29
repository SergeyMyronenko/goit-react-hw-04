import css from "./ImageCard.module.css";

export const ImageCard = ({
  imageCard: {
    likes,
    urls: { small, alt_description },
    user: { last_name },
    links: { download },
  },
}) => {
  const handleDownloadClick = () => {
    window.open(download, "_blank");
  };

  return (
    <div>
      <img className={css.image} src={small} alt={alt_description} />
      <div>
        <p>Likes: {likes}</p>
        <p>Author: {last_name}</p>
        <button onClick={handleDownloadClick}>Download</button>
      </div>
    </div>
  );
};
