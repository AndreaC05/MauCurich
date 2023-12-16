import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import banner from "../assets/images/banner.png";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import tiktok from "../assets/svg/tiktok.svg";
import correo from "../assets/svg/correo.svg";
import "../styles/navbar.css";

export default function Navbar() {
  const [visibleRight, setVisibleRight] = useState(false);
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
          <Button
            icon="pi pi-arrow-left"
            className="sidebar"
            onClick={() => setVisibleRight(true)}
          />
          <Sidebar
            visible={visibleRight}
            position="right"
            onHide={() => setVisibleRight(false)}
          >
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
            <a href="">
              <p>Shop</p>
            </a>
          </Sidebar>
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
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={whatsapp} alt="" />
              <img src={tiktok} alt="" />
              <img src={correo} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
