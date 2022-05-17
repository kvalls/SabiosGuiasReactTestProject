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
      <Footer />
      </div>
      </div>
    </>
  );
}