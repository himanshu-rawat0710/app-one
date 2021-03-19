import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteButtonHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>title</h2>
      <div className="actions">
        <button className="btn" onClick={deleteButtonHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
    </div>
  );
}

export default Todo;
