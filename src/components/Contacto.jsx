import { Divider } from "primereact/divider";
import "../styles/contacto.css";

const Contacto = ({ title, content }) => {
  return (
    <>
      <div className="container-principal">
        <div className="div-principal">
          <div className="flex justify-content-between align-items-center container-text">
            <b className="tit-div">{title}</b>
            <i className="pi pi-angle-down arrow-down"></i>
          </div>
          <Divider align="left" className="div-con"></Divider>
          <p className="text-div">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Contacto;