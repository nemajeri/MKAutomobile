import React from 'react';
import './Error404.css'

const Error404 = () => {
  return (
    <div className="mka__wrapper-error">
    <div className="mka__container">
      <div className='mka__content-error'>
        <h1 id='title'>OOOPPS...</h1>
        <h3 id='subtitle'>Die von Ihnen gesuchte Seite wurde nicht gefunden.</h3>
        <p id='text'>Sie können nicht finden, wonach Sie suchen? Nehmen Sie sich einen Moment Zeit und suchen Sie unten oder starten Sie auf unserer <a id='link' href='/'>Homepage</a></p>
        <input />
      </div>
    </div>
  </div>
  )
}

export default Error404