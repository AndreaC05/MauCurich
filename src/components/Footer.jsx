import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import tiktok from "../assets/svg/tiktok.svg";
import correo from "../assets/svg/correo.svg";
import "../styles/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-content-between align-items-center">
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100064363556502&locale=es_LA"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="" className="mr-4" />
          </a>
          <a
            href="https://www.instagram.com/art_mau92/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="" className="mr-4" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=51940007944"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="" className="mr-4" />
          </a>
          <a
            href="https://www.tiktok.com/@mau.cristina"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tiktok} alt="" className="mr-4" />
          </a>
          <a href="mailto:mau.art92@gmail.com" target="_blank" rel="noreferrer">
            <img src={correo} alt="" />
          </a>
        </div>
        <div className="textName">
          <p>@Mau Curich</p>
        </div>
      </footer>
    </>
  );
}
