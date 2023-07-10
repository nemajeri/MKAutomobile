import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { VscInbox } from 'react-icons/vsc';
import Modal from '../Modal/Modal';
import Button from '../utils/Button';
import './Dropzone.css';
import { useEffect } from 'react';

const DropzoneElement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 3,
      accept: {
        'image/jpeg': ['.jpeg', '.jpg'],
        'image/png': ['.png'],
      },
    });

  const handleOnModalClose = () => {
    setIsOpen(false);
  };

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    if (fileRejections.length > 0) {
      setIsOpen(true);
    }
  }, [fileRejections]);

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        <ul>
          {errors.map((e) => (
            <li key={e.code}>
              {file.name} - {e.message}
            </li>
          ))}
        </ul>
      </li>
    );
  });

  return (
    <>
      <div
        {...getRootProps({
          className: 'dropzone',
        })}
      >
        <input {...getInputProps()} />
        <span>
          <VscInbox style={{ size: '30px' }} />
        </span>
        <p id='text'>
          Klicken oder ziehen Sie Dateien in diesen Bereich, um sie hochzuladen.
          <br />
          Sie können bis zu 3 Dateien hochladen.
        </p>
      </div>
      <div>
        <h3>Akzeptierte Dateien:</h3>
        <ul>{acceptedFileItems}</ul>
      </div>
      {isOpen && (
        <Modal onClose={handleOnModalClose} isOpen={isOpen}>
          <h3>Abgelehnte Dateien:</h3>
          <ul>{fileRejectionItems}</ul>
          <Button onClick={handleOnModalClose}>ERNEUT VERSUCHEN</Button>
        </Modal>
      )}
    </>
  );
};

export default DropzoneElement;
