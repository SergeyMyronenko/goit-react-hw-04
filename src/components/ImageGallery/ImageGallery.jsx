import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ gallery }) => {
  return (
    <ul className={css.gallery}>
      {gallery.map((item) => (
        <li key={item.id}>
          <ImageCard imageCard={item} />
        </li>
      ))}
    </ul>
  );
};
