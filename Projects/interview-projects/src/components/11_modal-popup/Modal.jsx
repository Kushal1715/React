import { useState } from "react";
import ModalPopup from "./ModalPopup";

export default function Modal() {
  const [toggleModal, setToggleModal] = useState(false);
  const handleModal = () => {
    setToggleModal(true);
  };

  const closeModal = () => {
    setToggleModal(false);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {toggleModal ? (
        <ModalPopup closeModal={closeModal} />
      ) : (
        <button onClick={handleModal}>Open Modal popup</button>
      )}
    </div>
  );
}
