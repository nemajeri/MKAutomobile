import React from 'react';
import Button from '../utils/Button';
import './Error404.css';

const Error404 = () => {
  return (
    <div className='mka__wrapper error'>
      <div className='mka__container'>
        <div className='mka__content-error'>
          <h1>OOOPPS...</h1>
          <h3>Die von Ihnen gesuchte Seite wurde nicht gefunden.</h3>
          <p>
            Sie können nicht finden, wonach Sie suchen? Nehmen Sie sich einen
            Moment Zeit und suchen Sie unten oder starten Sie auf unserer{' '}
            <a href='/'>Homepage</a>
          </p>
          <div className='mka__alignment-error'>
            <input className='mka__input longer' placeholder='Suche...' />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
