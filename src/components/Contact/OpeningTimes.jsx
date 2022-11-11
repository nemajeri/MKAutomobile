import React from 'react';

const OpeningTimes = () => {
  return (
    <div className='mka__opening-times-contact'>
      <h6>ÖFFNUNGSZEITEN</h6>
      <div className='mka__opening-times-divider'></div>
      <div className='mka__opening-times-text'>
        <div>
          <p>
            <strong>Montag</strong>
          </p>
          <p>
            <strong>Dienstag</strong>
          </p>
          <p>
            <strong>Mittwoch</strong>
          </p>
          <p>
            <strong>Donnerstag</strong>
          </p>
          <p>
            <strong>Freitag</strong>
          </p>
          <p>
            <strong>Samstag</strong>
          </p>
          <p>
            <strong>Sonntag</strong>
          </p>
        </div>
        <div>
          <p>10:00h - 18:00h</p>
          <p>10:00h - 18:00h</p>
          <p>10:00h - 18:00h</p>
          <p>10:00h - 18:00h</p>
          <p>10:00h - 18:00h</p>
          <p>10:00h - 12:00h</p>
          <p id='mka__text-red'>Geschlossen</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningTimes;
