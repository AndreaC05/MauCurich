import { Image } from "primereact/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/artista/1.png";
import img2 from "../assets/artista/2.png";
import img3 from "../assets/artista/3.png";
import img4 from "../assets/artista/4.png";
import img5 from "../assets/artista/5.png";
import img6 from "../assets/artista/6.png";
import img7 from "../assets/artista/7.png";
import img8 from "../assets/artista/8.png";
import "../styles/artista.css";

export default function Artista() {
  return (
    <>
      <Navbar />
      <div className="container-artista text-center">
        <p>Maura Curichimba</p>
        <p>Artista digital</p>
        <div className="container-collage-images1 flex justify-content-center align-items-center">
          <Image src={img1} alt="autor-image" preview className="img1" />
          <Image src={img2} alt="autor-image" preview className="img2" />
        </div>
        <div className="container-collage-images2">
          <Image src={img3} alt="autor-image" preview className="img3" />
          <Image src={img4} alt="autor-image" preview className="img4" />
        </div>
        <div className="container-collage-images-3">
          <Image src={img5} alt="autor-image" preview className="img5" />
          <Image src={img6} alt="autor-image" preview className="img6" />
        </div>
        <div className="container-collage-images-4">
          <Image src={img7} alt="autor-image" preview className="img7" />
          <Image src={img8} alt="autor-image" preview className="img8" />
        </div>
      </div>

      <hr className="divider"/>
      <Footer />
    </>
  );
}
