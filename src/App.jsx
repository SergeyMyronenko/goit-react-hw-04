import { useState, useEffect } from "react";
import "../node_modules/modern-normalize/modern-normalize.css";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadMoreButton } from "./components/LoadMoreButton/LoadMoreButton";
import { Loader } from "./components/Loader/Loader";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { fetchImages } from "./rest-api";
import { Toaster } from "react-hot-toast";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ImageModal } from "./components/ImageModal/ImageModal";
import css from "./App.module.css";

export const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      try {
        setLoader(true);
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

  console.log(content);
  const handleSubmit = (inputQuery) => {
    setQuery(inputQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpen = (value) => {
    setIsOpen(true);
    setContent(value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <div className={css.main}>
        {images.length > 0 && (
          <ImageGallery gallery={images} onOpen={handleOpen} />
        )}
        {loader && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && <LoadMoreButton onClick={handleLoadMore} />}
        {isOpen && (
          <ImageModal isOpen={isOpen} onClose={handleClose} content={content} />
        )}
        <Toaster position="top-right" />
      </div>
    </div>
  );
};
