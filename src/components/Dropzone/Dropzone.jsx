import React, {useState} from 'react'
import './Dropzone.css'
import Dropzone from "react-dropzone";
import { GrInbox } from 'react-icons/gr'

const DropzoneElement = () => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));

  return (
    <div className="App">
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`
              })}
            >
              <input {...getInputProps()} />
              <span id='icon'><GrInbox/></span>
              <p id='text'>Klicken oder ziehen Sie Dateien in diesen Bereich, um sie hochzuladen. <br/>
Sie können bis zu 3 Dateien hochladen.</p>
            </div>
          );
        }}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropzoneElement