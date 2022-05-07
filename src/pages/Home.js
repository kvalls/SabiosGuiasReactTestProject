import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/all-routes");
  }

  return (
    <>
      {/* <Navbar/> */}
      <p>Home</p>
      <button onClick={handleClick}>Routes</button>
      <Footer />
    </>
  );
}