import React from 'react';
import { Footer } from '../../components';
import './Jumbotrone.css';
import { Link } from 'react-router-dom';

const Jumbotrone = () => {
  return (
    <footer className='mka__footer-normal'>
      <div className='mka__jumbotrone-bg-image'>
        <div className='mka__container'>
          <div className='mka__jumbotrone-div'>
            <div className='mka__jumbotrone-contact'>
              <h6>KONTAKT</h6>
              <div className='mka__contact-infos-divider'></div>
              <p>
                Im Trenkenschuh 15-17<br></br>
                2100 Korneuburg<br></br>
                <Link to='tel:+43 680 3149332'>+43 680 3149332</Link>
                <br></br>
                <Link to='+43 2262 20413'>+43 2262 20413</Link>
                <br></br>
                <Link to='mLinkilto:office@mkautomobile.at'>
                  office@mkautomobile.at
                </Link>
              </p>
            </div>
            <div className='mka__jumbotrone-opening-times'>
              <h6>ÖFFNUNGSZEITEN</h6>
              <div className='mka__contact-infos-divider'></div>
              <p>
                Probefahrt und Besichtigung sind<br></br>
                ausschließlich nach Terminvereinbarung möglich.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </footer>
  );
};

export default Jumbotrone;
