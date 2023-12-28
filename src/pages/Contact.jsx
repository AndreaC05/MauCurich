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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": e.target.getAttribute("name"), // Usa "name" en lugar de "nombre"
          nombre,
          apellido,
          correo,
          mensaje,
        }).toString(),
      });
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      alert("Error inesperado al enviar el formulario");
    }
  };

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
          <form
            action="/"
            method="post"
            id="formContact"
            name="formContact"
            netlify
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap">
              <div className="form-group inputFloat">
                <span className="p-float-label">
                  <InputText
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                  <label htmlFor="nombre">Nombre*</label>
                </span>
              </div>
              <div className="form-group inputFloat">
                <span className="p-float-label">
                  <InputText
                    id="apellido"
                    name="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                  <label htmlFor="apellido">Apellido*</label>
                </span>
              </div>
            </div>
            <div className="form-group">
              <span className="p-float-label">
                <InputText
                  id="correo"
                  name="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
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
                  required
                ></textarea>
              </Fieldset>
            </div>
            <div className="form-group">
              <input type="hidden" name="form-name" value="formContact" />
            </div>
            <div className="form-group">
              <p className="hidden">
                <label>
                  No llenes este campo si eres humano:{" "}
                  <input name="bot-field" />
                </label>
              </p>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Enviar mensaje"
                className="btnEnviar"
              />
            </div>
          </form>
        </div>
      </div>

      <hr className="divider" />
      <Footer />
    </>
  );
}
