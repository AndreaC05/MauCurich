import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";
import splash from "../assets/splash.svg";
import "../styles/contacto.css";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  return (
    <>
      <Navbar />
      <div className="contenedor_principal">
        <div className="div1">
          <Contacto
            title="Tamaños y precios"
            content="Te dejo los tres tamaños mas comunes para realizar un retrato. El precio se 
        basa en retratos de dibujos sin fondo, tanto en grafito como color."
          />

          <Contacto
            title="El proceso de dibujo"
            content="A lo largo del proceso de dibujo, te enviaré fotos de progreso para 
            asegurarme de que estés satisfecho(a) con el retrato. Una vez completado, te enviaré 
            una fotografía final y el saldo restante solo se pagará cuando estés
            100% contenta."
          />
        </div>
        <div className="div2">
          <Contacto
            title="Asegura tu reserva"
            content="Primero debemos asegurarnos de que
        tengas una foto de referencia de alta
        calidad para que yo trabaje. Ponte en
        contacto conmigo a través del formulario de contacto sitiado abajo, por correo electrónico o 
        redes sociales para enviarme tus fotos de referencia para empezar."
          />

          <Contacto
            title="El tiempo de dibujo"
            content="El plazo para los retratos pueden variar dependiendo de la complejidad del 
            dibujo, el tamaño y el número de rostros."
          />
        </div>
      </div>

      <div className="container-form">
        <img src={splash} alt="" className="image-splash" />
        <div className="form">
          <form action="">
            <div className="flex">
              <div className="form-group">
                <span className="p-float-label">
                  <InputText
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <label htmlFor="username">Nombre*</label>
                </span>
              </div>
              <div className="form-group">
                <span className="p-float-label">
                  <InputText
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                  <label htmlFor="username">Apellido*</label>
                </span>
              </div>
            </div>
            <div className="form-group">
              <span className="p-float-label">
                <InputText
                  id="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
                <label htmlFor="correo">Correo*</label>
              </span>
            </div>
            <div className="form-group">
              <Fieldset legend="Mensaje*" className="messageBox">
                <textarea
                  name="mensaje"
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </Fieldset>
            </div>
          </form>
        </div>
      </div>

      <hr className="divider" />
      <Footer />
    </>
  );
}
