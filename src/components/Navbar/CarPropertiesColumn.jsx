import React from 'react';
import './Navbar.css';

const CarPropertiesColumn = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td id='mka__delete-car--row'></td>
          </tr>
          <tr>
            <td id='mka__price-and--image'>Price</td>
          </tr>
          <tr>
            <td>Year</td>
          </tr>
          <tr>
            <td>Make</td>
          </tr>
          <tr>
            <td>Model</td>
          </tr>
          <tr>
            <td>Body Style</td>
          </tr>
          <tr>
            <td>Mileage</td>
          </tr>
          <tr>
            <td>Fuel Economy</td>
          </tr>
          <tr>
            <td>Transmission</td>
          </tr>
          <tr>
            <td>Condition</td>
          </tr>
          <tr>
            <td>Drivetrain</td>
          </tr>
          <tr>
            <td>Engine</td>
          </tr>
          <tr>
            <td>Exterior Color</td>
          </tr>
          <tr>
            <td>Features & Options</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarPropertiesColumn;
