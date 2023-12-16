import { TabView, TabPanel } from "primereact/tabview";
// import React, { useState, useEffect, useRef } from 'react';
// import { Galleria } from 'primereact/galleria';
// import { PhotoService } from './service/PhotoService';
import "../styles/galeriaCom.css"

export default function galeria() {

    // const [images, setImages] = useState([
    //     {itemImageScr:}
    // ]);
    // const [activeIndex, setActiveIndex] = useState(0);    
    // const galleria = useRef(null);
    
  return (
    <>
      <div className="card">
        <TabView>
          <TabPanel header="Retratos"></TabPanel>
          <TabPanel header="Pinturas"></TabPanel>
        </TabView>
      </div>
    </>
  );
}
