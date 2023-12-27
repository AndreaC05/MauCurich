import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";
import "../styles/contacto.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contenedor_principal">
        <div className="div1 flex">
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
        <div className="div2 flex">
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

      <hr className="divider"/>
      <Footer />
    </>
  );
}
