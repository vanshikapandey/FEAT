import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Form from "./FormSubmission";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ background: "#D75B5F", border: "none" }}
        onClick={handleShow}
      >
        Contact Us
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ background: "#F4CA76" }}>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#030229" }}>
          <Form />
        </Modal.Body>
        <Modal.Footer style={{ background: "#F4CA76" }}>
          <Button
            style={{ background: "#D75B5F", border: "none" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
