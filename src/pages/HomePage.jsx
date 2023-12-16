import { Image } from "primereact/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import des from "../assets/images/desaut.png";
import bn4 from "../assets/images/bn4.png";
import c4 from "../assets/images/c4.png";
import bn14 from "../assets/images/bn14.png";
import c5 from "../assets/images/c5.png";
import c9 from "../assets/images/c9.png";
import c2 from "../assets/images/c2.png";
import "../styles/homepage.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container_home">
        <div className="frase">
          <p>&quot;Regala Arte, Regala Amor&quot;</p>
          <p className="autor">- Mau Curich</p>
        </div>
        <hr className="divider" />
        <div className="des_aut flex justify-content-center align-items-center">
          <div className="img">
            <img src={des} alt="" />
          </div>
          <div className="tex">
            <p>
              Artista plástica en la mencion de dibujo y pintura, egresada de la
              escuela de formación artística Victor Morey Peña. <br />{" "}
              Participaciones en exposiciones colectivas en la ciudad de
              Iquitos.
            </p>
          </div>
        </div>
        <hr className="divider" />
        <div className="explorar">
          <h1>Explorar Trabajos</h1>
          <div className="images-t flex flex-column justify-content-center align-items-center">
            <div className="flex flex-wrap justify-content-center align-items-center img1 mt-5">
              <div>
                <Image src={bn4} alt="" preview />
              </div>
              <div>
                <Image src={c9} alt="" preview />
              </div>
              <div>
                <Image src={c2} alt="" preview />
              </div>
            </div>
            <div className="flex flex-wrap justify-content-center align-items-center img2 mt-5">
              <div>
                <Image src={c5} alt="" preview />
              </div>
              <div>
                <Image src={c4} alt="" preview />
              </div>
              <div>
                <Image src={bn14} alt="" preview />
              </div>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <Footer />
      </div>
    </>
  );
}
