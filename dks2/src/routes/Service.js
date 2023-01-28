import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Products"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
