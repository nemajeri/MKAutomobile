import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './Navbar.css';

const IndividualCarColumn = ({
  car,
  car: {
    id,
    link,
    year,
    make,
    model,
    exteriror,
    mileage,
    transmission,
    condition,
    drivetrain,
    engine,
    price,
  },
  onClickDeleteCarHandler,
}) => {
  return (
    <div className='mka__place-for-car_table'>
      <table>
        <tbody>
          <tr>
            <td
              id='mka__delete-car--row'
              onClick={() => onClickDeleteCarHandler(car)}
            >
                <AiOutlineCloseCircle className='ai-close'/>
            </td>
          </tr>
          <tr>
            <td id='mka__price-and--image'>
              {link && (
                <img
                  src={require(`../../assets/${link}`)}
                  alt='suggested-cars'
                  className='car-in-comparison'
                />
              )}
              <p>{price}</p>
            </td>
          </tr>
          <tr>
            <td>{year}</td>
          </tr>
          <tr>
            <td>{make}</td>
          </tr>
          <tr>
            <td>{model}</td>
          </tr>
          <tr>
            <td>{exteriror}</td>
          </tr>
          <tr>
            <td>{mileage}</td>
          </tr>
          <tr>
            <td>{link}</td>
          </tr>
          <tr>
            <td>{transmission}</td>
          </tr>
          <tr>
            <td>{condition}</td>
          </tr>
          <tr>
            <td>{drivetrain}</td>
          </tr>
          <tr>
            <td>{engine}</td>
          </tr>
          <tr>
            <td>{exteriror}</td>
          </tr>
          <tr>
            <td>Features & Options</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IndividualCarColumn;
