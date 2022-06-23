import "./Footer.css"

const Footer = () => {
  return (
    <div className="mka__div-footer">
      <div className="mka__container-footer">
        <div className="mka__footer">
          <div className="mka__footer-links">
            <p>
              <a href="/datenschutz">DATENSCHUTZ</a>
            </p>
            <p>
              <a href="/impressum">IMPRESSUM</a>
            </p>
          </div>
          <div className="mka__footer-copyright">
            <p>
              ©Copyright 2022 <a href="/">MKAUTOMOBILE</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer