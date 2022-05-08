import { useNavigate } from "react-router-dom";
import CarouselComp from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/all-routes");
  }

  return (
    <>
      <div className='App'>
      <Header/>
      <div className='Content'>

      <CarouselComp/>
      <Footer />
      </div>
      </div>
    </>
  );
}