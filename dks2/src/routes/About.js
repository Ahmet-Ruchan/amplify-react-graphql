import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "../assets/adam.jpg";

function About() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
