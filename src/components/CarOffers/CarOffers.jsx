import "./CarOffers.css"
import { FilterMainBar } from ".."
import CarsItem from "../CarsItem/CarsItem"

const CarOffers = () => {
  return (
    <div className="mka__wrapper-car-offers">
      <div className="mka__container-car-offers">
        <div className="mka__content-car-offers">
          <CarsItem/>
        </div>
      </div>
    </div>
  )
}

export default CarOffers