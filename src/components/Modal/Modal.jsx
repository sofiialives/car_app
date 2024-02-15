import React, { useEffect } from "react";
import Icon from "../Icon";
import { Backdrop, ModalContent } from "./Modal.styled";

const Modal = ({ setVisible, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setVisible]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setVisible(false);
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <button onClick={() => setVisible(false)}>
          <Icon className="modal-icon" id="close" />
        </button>
        {children}
      </ModalContent>
    </Backdrop>
  );
};

export default Modal;
