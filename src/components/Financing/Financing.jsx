import React from 'react';
import Denzelbank from '../utils/Denzelbank';
import Santanderbank from '../utils/Santanderbank';
import './Financing.css';

const Financing = () => {
  return (
    <div className='mka__wrapper financing'>
      <div className='mka__container'>
        <div className='mka__content-financing'>
          <p>
            Gerne bieten wir Ihnen über unsere Finanzierungspartner beste
            Angebote rund um Leasing und Kreditfinanzierung an.
            <br />
            Unkomplizierte Abwicklung direkt bei uns im Haus.
            <br />
            So ersparen Sie sich Zeit und können rasch und ohne zusätzlichen
            Aufwand Ihr neues Auto in Gebrauch nehmen!
          </p>
          <ul>
            <li>Finanzierung bereits ab 1 Monat Beschäftigungsdauer möglich</li>
            <li>Auch ohne Anzahlung</li>
            <li>Sofortkreditanfrage</li>
            <li>Fast alle gängigen Finanzierungsmodelle</li>
            <li>Bei passender Bonität Abwicklung innerhalb von 24h</li>
          </ul>
          <br />
          <br />
          <p>Bei uns können Sie Ihr Fahrzeug wie folgt finanzieren:</p>
          <ul>
            <li>Restwertleasing</li>
            <li>Leasing</li>
            <li>50:50 Finanzierung mit 0% Zinsen</li>
            <li>Drittelfinanzierung</li>
            <li>Klassische Kreditfinanzierung</li>
          </ul>
          <br />
          <br />
          <p>
            Gerne nehmen wir Ihr altes Fahrzeug zu guten Konditionen in Zahlung.
          </p>
          <h1>UNSERE FINANZIERUNGSPARTNER</h1>
          <div className='mka__logos-wrapper'>
              <Santanderbank />
              <Denzelbank />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
