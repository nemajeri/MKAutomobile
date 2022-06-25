import "./FilterMainBar.css"
import Slider from 'rc-slider';
import Range  from 'rc-slider';
import 'rc-slider/assets/index.css';


const CarOffers = () => {
  return (
    <div className="mka__cars-top-filters-box">
     <Slider />
         <Range />
    </div>
  )
}

export default CarOffers