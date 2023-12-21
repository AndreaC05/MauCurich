import { TabView, TabPanel } from "primereact/tabview";
import { Image } from "primereact/image";
import bn1 from "../assets/retratos/bn1.png";
import bn2 from "../assets/retratos/bn2.png";
import bn3 from "../assets/retratos/bn3.png";
import bn5 from "../assets/retratos/bn5.png";
import bn8 from "../assets/retratos/bn8.png";
import bn9 from "../assets/retratos/bn9.png";
import bn10 from "../assets/retratos/bn10.png";
import bn13 from "../assets/retratos/bn13.png";
import bn12 from "../assets/retratos/bn12.png";
import bn11 from "../assets/retratos/bn11.png";
import bn14 from "../assets/retratos/bn14.png";
import bn18 from "../assets/retratos/bn18.png";
import bn17 from "../assets/retratos/bn17.png";
import bn19 from "../assets/retratos/bn19.png";

import c1 from "../assets/pinturas/c1.png";
import c2 from "../assets/pinturas/c2.png";
import c4 from "../assets/pinturas/c4.png";
import c5 from "../assets/pinturas/c5.png";
import c6 from "../assets/pinturas/c6.png";
import c7 from "../assets/pinturas/c7.png";
import c9 from "../assets/pinturas/c9.png";
import c10 from "../assets/pinturas/c10.png";
import "../styles/galeriaCom.css";

export default function galeria() {
  return (
    <>
      <div className="card">
        <TabView className="tb_container">
          <TabPanel header="Retratos">
            <div className="galerys">
              <div className="flex">
                <div className=" fila 1">
                  <Image src={bn1} alt="img" preview />
                  <p>A4 (21cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 1">
                  <Image src={bn2} alt="img" preview />
                  <p>A4 (21cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 1">
                  <Image src={bn5} alt="img" preview />
                  <p>A3 (42cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>
              </div>

              <div className="flex">
                <div className=" fila 2">
                  <Image src={bn10} alt="img" preview />
                  <p>A3 (42cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 2">
                  <Image src={bn13} alt="img" preview />
                  <p>A1 (54.4cm X 84.1cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 2">
                  <Image src={bn12} alt="img" preview />
                  <p>A3 (42cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>
              </div>

              <div className="flex">
                <div className=" fila 3">
                  <Image src={bn11} alt="img" preview />
                  <p>A4 (21cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 3">
                  <Image src={bn14} alt="img" preview />
                  <p>A3 (42cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 3">
                  <Image src={bn18} alt="img" preview />
                  <p>A3 (42cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>
              </div>

              <div className="flex">
                <div className=" fila 4">
                  <Image src={bn17} alt="img" preview />
                  <p>A4 (21cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 4">
                  <Image src={bn19} alt="img" preview />
                  <p>A3 (42cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 4">
                  <Image src={bn9} alt="img" preview />
                  <p>A4 (21cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>
              </div>

              <div className="flex">
                <div className=" fila 5">
                  <Image src={bn8} alt="img" preview />
                  <p>A4 (21cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className=" fila 5">
                  <Image src={bn3} alt="img" preview />
                  <p>A3 (42cm X 29.7cm)</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Pinturas">
            <div className="galerys">
              <div className="flex">
                <div className="fila 1">
                  <Image src={c1} alt="img" preview />
                  <p>20cm X 25cm</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className="fila 1">
                  <Image src={c2} alt="img" preview />
                  <p>20cm X 25cm</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className="fila 1">
                  <Image src={c4} alt="img" preview />
                  <p>20cm X 20cm</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>
              </div>

              <div className="flex">
                <div className="fila 2">
                  <Image src={c5} alt="img" preview />
                  <p>50cm X 60cm</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className="fila 2">
                  <Image src={c6} alt="img" preview />
                  <p>20cm X 20cm</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className="fila 2">
                  <Image src={c7} alt="img" preview />
                  <p>20cm X 20cm</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>
              </div>
              <div className="flex">
                <div className="fila 3">
                  <Image src={c9} alt="img" preview />
                  <p>20cm X 25cm</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>

                <div className="fila 3">
                  <Image src={c10} alt="img" preview />
                  <p>20cm X 20cm</p>
                  <p>Grafito 1 rostro</p>
                  <p>Color 1 rostro : Consultar</p>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabView>

        <hr className="divider" />
      </div>
    </>
  );
}
