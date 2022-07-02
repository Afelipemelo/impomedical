import React,{Fragment} from "react";
import Header from "./components/header";
import NavBar from "./components/nav";
import Slider from "./components/slider";
import NuevaColeccion from "./components/nuevaColeccion";
import Info from "./components/info";
import Catalogo from "./components/catalogo";
import Productos from "./components/productos";
import Marcha from "./components/marcha";
import Terapia from "./components/terapia";
import Footer from "./components/footer";
function App() {
  return (
    <Fragment>
      <Header/>
      <NavBar/>
      <Slider/>
      <NuevaColeccion/>
      <Info/>
      <Catalogo/>
      <Productos/>
      <Marcha/>
      <Terapia/>
      <Footer/>
    </Fragment>
  );
}

export default App;
