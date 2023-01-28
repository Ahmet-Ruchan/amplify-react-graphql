import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/menu.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Location from "src/components/Location";

function Contact() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <Location />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
