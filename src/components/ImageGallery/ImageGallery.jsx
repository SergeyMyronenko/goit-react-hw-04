import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ gallery }) => {
  return (
    <ul>
      {gallery.map((item) => (
        <li key={item.id}>
          <ImageGalleryItem imageCard={item} />
        </li>
      ))}
    </ul>
  );
};
