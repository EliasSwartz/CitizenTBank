import React, { useState } from 'react';
import Modal from 'react-modal';
import './FloatingButton.css';




const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission, e.g., send the input value to the server
    console.log('Submitted value:', inputValue);
    closeModal();
  };

  return (
    <div>
      <button className="floating-button" onClick={openModal}>
        <i className="fa-solid fa-building-columns"></i>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Floating Button Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-video-container">
          <video src="videos/Aivid2.mp4" 
          className="aivid" autoPlay loop muted controls />
        </div>
      </Modal>
    </div>
  );
};

export default FloatingButton;

