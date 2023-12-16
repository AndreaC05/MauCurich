import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import tiktok from "../assets/svg/tiktok.svg";
import correo from "../assets/svg/correo.svg";
import "../styles/footer.css"

export default function Footer() {
  return (
    <>
      <footer className="flex justify-content-between align-items-center">
        <div>
          <img src={facebook} alt="" className="mr-4 "/>
          <img src={instagram} alt="" className="mr-4 "/>
          <img src={whatsapp} alt="" className="mr-4 "/>
          <img src={tiktok} alt="" className="mr-4 "/>
          <img src={correo} alt="" />
        </div>
        <div>
          <p>@Mau Curich</p>
        </div>
      </footer>
    </>
  );
}
