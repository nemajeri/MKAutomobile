import React from 'react';
import './Error404.css';

const Error404 = () => {
  return (
    <div className='mka__wrapper-error'>
      <div className='mka__container'>
        <div className='mka__content-error'>
          <h1 id='title'>OOOPPS...</h1>
          <h3 id='subtitle'>
            Die von Ihnen gesuchte Seite wurde nicht gefunden.
          </h3>
          <p id='text'>
            Sie können nicht finden, wonach Sie suchen? Nehmen Sie sich einen
            Moment Zeit und suchen Sie unten oder starten Sie auf unserer{' '}
            <a id='link' href='/'>
              Homepage
            </a>
          </p>
          <div className='mka__alignment-error'>
            <input className='mka__input longer' placeholder='Suche...' />
            <button className='btn shorter'>
              <svg
                class='button'
                width='180px'
                height='60px'
                viewBox='0 0 180 60'
                className='border'
              >
                <polyline
                  points='179,1 179,59 1,59 1,1 179,1'
                  class='bg-line'
                />
                <polyline
                  points='179,1 179,59 1,59 1,1 179,1'
                  class='hl-line'
                />
              </svg>
              <span>Suche</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
