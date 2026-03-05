import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({
  show,
  handleClose,
  handleConfirm,
  title = "Confirm Action",
  message = "Are you sure?",
  confirmText = "Yes",
  variant = "danger"
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{message}</Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant={variant} onClick={handleConfirm}>
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;