import { Link } from "react-router-dom";
import banner from "../assets/images/banner.png";
import "../styles/navbar.css";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import tiktok from "../assets/svg/tiktok.svg";
import correo from "../assets/svg/correo.svg";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container-image">
          <img src={banner} alt="banner" width="100%" height="100%" />
          <div className="overlay"></div>
          <div className="header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/artista">Artista</Link>
              </li>
              <li>
                <Link to="/galery">Galery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <a href="" className="shop">
              <p>Shop</p>
            </a>
          </div>
          <div className="title-banner">
            <hr />
            <p>
              <span>M</span>
              <span>A</span>
              <span>U</span>
              <span> </span>
              <span>C</span>
              <span>U</span>
              <span>R</span>
              <span>I</span>
              <span>C</span>
              <span>H</span>
            </p>
            <div className="social_icons">
              <a href="https://www.facebook.com/profile.php?id=100064363556502&locale=es_LA" target="_blank" rel="noreferrer"><img src={facebook} alt=""/></a>
              <a href="https://www.instagram.com/art_mau92/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
              <a href="https://api.whatsapp.com/send?phone=51940007944" target="_blank" rel="noreferrer"><img src={whatsapp} alt="" /></a>
              <a href="https://www.tiktok.com/@mau.cristina" target="_blank" rel="noreferrer"><img src={tiktok} alt="" /></a>
              <a href="mailto:mau.art92@gmail.com" target="_blank" rel="noreferrer"><img src={correo} alt="" /></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
