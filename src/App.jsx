import { useState } from "react";
import "../node_modules/modern-normalize/modern-normalize.css";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
// import { ImageModal } from "./components/ImageModal/ImageModal";
// import { LoadMoreButton } from "./components/LoadMoreButton/LoadMoreButton";
// import { Loader } from "./components/Loader/Loader";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { fetchImages } from "./rest-api";

export const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (query) => {
    const imageData = await fetchImages(query);
    setImages(imageData);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery gallery={images} />
      {/* <LoadMoreButton />
      <Loader />
      <ImageModal /> */}
    </div>
  );
};
