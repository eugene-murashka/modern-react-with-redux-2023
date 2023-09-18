import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      Close Modal
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      There is important content that you have to read!
    </Modal>
  );

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {isOpen && modal}
    </div>
  );
}

export default ModalPage;
