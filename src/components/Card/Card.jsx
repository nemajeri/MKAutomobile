import React from 'react' 
import './Card.css'

function Card() {
  return (
  <div>
          <div className="card_wrapper">
            <div className="card_image">
              <img src={require('../../assets/bmw.jpg')} alt='bmw'/>
            </div>
               <div className="card_list">
               <ul className="card_inline-list">
                <li></li>
                <li></li>
                <li></li>
               </ul>
               </div>
                    <div className="card_car-content">
                      <div className=" card_separator">
                        <div className="card_car-price"></div>
                      </div>
          </div>
       </div>
  </div>
      
  );
}

export default Card