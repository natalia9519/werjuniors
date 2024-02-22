import "./homeView.css";
import CarrouselHome from "../../components/carrouselHome/CarrouselHome";

function HomeView() {
  return (
    <>
      <main>
      
          <img src="https://i.postimg.cc/wHBRhggW/Chicohome4.png" className="imgchicohome" alt="Imagen Portada Home" />
     
        <h1 className="h1-title-pageHome">Nuestros coders</h1>
      
          <CarrouselHome />
         
          <CarrouselHome />
          
          
          <img src="https://i.postimg.cc/7DTV4H7C/gruposobre-Nosotros1.png" className="imgchomenosotros" alt="Sobre nosotros" />
      
      </main>
    </>
  );
}

export default HomeView;
