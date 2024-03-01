import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ gallery, onClickImage, onOpen }) => {
  return (
    <ul className={css.gallery}>
      {gallery.map((item) => (
        <li key={item.id} onClick={onOpen}>
          <ImageCard imageCard={item} openModal={onClickImage} />
        </li>
      ))}
    </ul>
  );
};
