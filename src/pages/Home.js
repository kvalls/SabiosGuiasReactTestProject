import { useNavigate } from "react-router-dom";
import CarouselMain from "../components/CarouselMain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/all-routes");
  }

  return (
    <>
      <div className="App">
      <Header className="Header"/>
      <div className="Content">
      <CarouselMain />
      <Section/>
      <div className="logos">
        <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
        <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
        <img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        <img src="/img/FundaciónLidiaGarcía.jpg" alt="Sabios Guías Intérpretes" />
      </div>
      <Footer />
      </div>
      </div>
    </>
  );
}