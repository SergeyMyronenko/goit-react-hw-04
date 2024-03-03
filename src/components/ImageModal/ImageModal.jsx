import css from "./ImageModal.module.css";
import Modal from "react";

export const ImageModal = ({
  isOpen,
  onClose,
  content: { description, urls },
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={urls.regular} alt={description} />
    </Modal>
  );
};
