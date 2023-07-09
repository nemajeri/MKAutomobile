import React, { useEffect } from 'react';
import './Modal.css';
import { useCallback } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <div className='modal-overlay' onClick={handleOverlayClick}>
        <div className='modal-content'>{children}</div>
      </div>
    </>
  );
};

export default Modal;
