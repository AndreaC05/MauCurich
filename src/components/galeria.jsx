import { TabView, TabPanel } from "primereact/tabview";
// import React, { useState, useEffect, useRef } from 'react';
// import { Galleria } from 'primereact/galleria';
// import { PhotoService } from './service/PhotoService';
import "../styles/galeriaCom.css";

export default function galeria() {
  // const [images, setImages] = useState([
  //     {itemImageScr:}
  // ]);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const galleria = useRef(null);

  return (
    <>
      <div className="card">
        <TabView className="tb_container">
          <TabPanel header="Retratos">
            <img src="" alt="img" />
            <p>A4 (297X210 mm)</p>
            <p>Grafito 1 rostro S/. 20</p>
            <p>Color 1 rostro : Consultar</p>
          </TabPanel>
          <TabPanel header="Pinturas">
            <img src="" alt="img" />
            <p>A4 (297X210 mm)</p>
            <p>Grafito 1 rostro S/. 20</p>
            <p>Color 1 rostro : Consultar</p>
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}
