import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import { Document } from 'react-pdf/dist/entry.webpack';
// import { Page } from 'react-pdf'
import JRResume from "../assets/JaydenResume.pdf";

const Resume = () => {
  // eslint-disable-next-line
  const [pageNumber, setPageNumber] = useState(1);
  const [isShow, invokeModal] = useState(false);

  const invokeModalHandler = () => {
    invokeModal(true);
  };

  const hideModalHandler = () => {
    invokeModal(false);
  };

  return (
    <div>
      <Modal show={isShow} onHide={hideModalHandler} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Jayden's Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "75vh" }}>
          <iframe
            src={JRResume}
            title="Jayden's Resume"
            width="100%"
            height="100%"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={hideModalHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <button onClick={invokeModalHandler} variant="primary">
        Show Resume <ArrowRightCircle size={25} />
      </button>
    </div>
  );
};

export default Resume;
