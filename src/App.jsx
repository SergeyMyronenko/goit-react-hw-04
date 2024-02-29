import { useState, useEffect } from "react";
import "../node_modules/modern-normalize/modern-normalize.css";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
// import { ImageModal } from "./components/ImageModal/ImageModal";
import { LoadMoreButton } from "./components/LoadMoreButton/LoadMoreButton";
import { Loader } from "./components/Loader/Loader";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { fetchImages } from "./rest-api";
import { Toaster } from "react-hot-toast";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

export const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getImages = async () => {
      try {
        setLoader(true);
        setImages([]);
        const imageData = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...imageData];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = (inputQuery) => {
    setQuery(inputQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery gallery={images} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <LoadMoreButton onClick={handleLoadMore} />}
      {/* <ImageModal /> */}
      <Toaster position="top-right" />
    </div>
  );
};
