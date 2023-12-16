import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Galeria from "../components/galeria";

export default function Galery() {
    return(
        <>
        <Navbar/>
        <div className="container_galeria">
            <Galeria /> 
        </div>
        <Footer/>
        </>
    );
}

