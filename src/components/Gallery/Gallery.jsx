import "./Gallery.css"
import ImageSlider from "../ImageSlider/ImageSlider"

const Gallery = () => {
  return (
    <div className="mka__wrapper-gallery">
      <div className="mka__container">
        <div className="mka__content-gallery">
          <ImageSlider />
        </div>
      </div>
    </div>
  )
}

export default Gallery