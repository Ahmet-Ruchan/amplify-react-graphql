import "./TripStyles.css";
import TripData from "./TripData";
import YoutubeEmbed from "./YoutubeEmbed";
import Trip1 from "../assets/urun-1.jpg";
import Trip2 from "../assets/urun-2.jpg";
import Trip3 from "../assets/urun-3.jpg";
import Trip4 from "../assets/urun-4.jpg";
import Trip5 from "../assets/urun-5.jpg";
import Trip6 from "../assets/urun-6.jpg";
// import Video from "./assets/video1.mp4";

function Trip() {
  return (
    <div className="trip">
      <h1>OUR PRODUCTS</h1>
      <p>Developer of Key Solutions you have</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="RUST PREVENTIVE COATING"
          text="POR-15 Rust Preventive Coating is a high performance coating designed to paint directly on prepped rusted or seasoned metal surfaces to stop rust permanently."
        />
        <TripData
          image={Trip2}
          heading="CLEANER DEGREASER"
          text="POR-15 Cleaner Degreaser (formerly marine-clean) cleans and degreases in one application without leaving residues, noxious fumes, or flammable solvents. No other cleaner works as fast or as well."
        />
        <TripData
          image={Trip3}
          heading="METAL PREP"
          text="POR-15 Metal Prep provides the best adhesion for POR-15 Rust Preventive Coating on any metal surface, including aluminum and shiny polished metal surfaces."
        />
        
      </div>
      
      <div className="tripcard">
        <TripData
          image={Trip4}
          heading="Raptor Liner Kit - 1 US Gallon"
          text="The 1 US Gallon Raptor Liner Kit is the industry standard in bed liner coating. Each kit contains four of Raptor and one tin of hardener. Each kit covers approximately 125 square feet, enough to do a full size pick-up truck bed. Compatible with both Raptor Schutz and Professional Vari-Nozzle application guns."
        />
        <TripData
          image={Trip5}
          heading="RAPTOR 4:1 Anti-Corrosive Epoxy Primer Kit"
          text="RAPTOR Anti-Corrosive Epoxy Primer is a 2K high performance primer specifically designed to be used under RAPTOR Protective Coating to further extend the protective and anti-corrosive properties of RAPTOR."
        />
        <TripData
          image={Trip6}
          heading="3-STEP STOP RUST SYSTEM"
          text="The POR-15 3-Step Stop Rust System is designed to stop rust on metal surfaces and ensures the best results when applying POR-15 Rust Preventive Coating. Prepare and prime bare metal or directly paint rust with confidence."
        />
        
      </div>

      <br></br><br></br>
      <h1 className="videoText">How to Use Raptor Epoxy Primer?</h1>
      <br></br>
      <YoutubeEmbed embedId="ELno6RChbus" />
      <br></br><br></br>

      <div className="tripcard">
        <h4 className="baslik-A">A</h4> <p className="product-A">
        <h4 className="altBaslik">Anti -Sticker Coatings</h4> <br></br>
        Offering durable solutions to enhance the performance of Anti -Sticker Coatings replacing traditional technologies.</p> 
        <h4 className="baslik-A"></h4> <p className="product-A">
        <h4 className="altBaslik">Anti- microbial Coatings</h4>   <br></br>
        Helping people achieve to meet increasing global cleaning demands.</p> 
      </div>
      
      <div className="tripcard">
        <h4 className="baslik-A"></h4> <p className="product-A">
        <h4 className="altBaslik">Abrasion Resistant Coatings</h4>  <br></br>
        Meeting the needs of the transportation and other industry today and for the future.</p> 
        <h4 className="baslik-I"></h4> <p className="product-I">Abrasion resistance coatings are applied to a substrate, or surface, to prevent mechanical damage that can result in surface imperfections.
         <br></br>
        </p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-B">B</h4> <p className="product-B">
        <h4 className="altBaslik">Bright Gold Leaf Paint 50 Years</h4>   <br></br>
        Sustainably conscious, trend-led and consumer desired gold color, 20.000 hours QUV and wheather resistantce. Thus achieve to meet super durable requirements concepts.</p> 
        <h4 className="baslik-B"></h4> <p className="product-B">
        <h4 className="altBaslik">Building Industry</h4>  <br></br>
        Supporting the Building and Construction Industry to meet the new challenges it faces.</p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-D">D</h4> <p className="product-D">
        <h4 className="altBaslik">Durable Coatings</h4> <br></br>
        Manufacturing and delivering high abrasion resistant coatings that provide technically supported product benefits for both aesthetics and performance .</p> 
        <h4 className="baslik-D"></h4> <p className="product-D">Durable coatings refer to chemical treatments that are applied to the face fabric of garments, tents, and sleeping bags to make them hydrophobic (water resistant).
         <br></br>
        </p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-E">E</h4> <p className="product-E">
        <h4 className="altBaslik">Electrical Insulation Coatings</h4> <br></br>
        2000 Volt insulation coatings, offering solutions to the Electric and Electronic industry.</p> 
        <h4 className="baslik-E"></h4> <p className="product-E">
        <h4 className="altBaslik">Energy & Resources</h4>  <br></br>
        Providing solutions to oilfield, mining, off shore and refinery markets for the increasing demand for energy.</p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-F">F</h4> <p className="product-F">
        <h4 className="altBaslik">Fire Protection Coatings</h4>   <br></br>
        Supporting the Fire protection industry with our long history of innovation.</p> 
        <h4 className="baslik-F"></h4> <p className="product-F">
        <h4 className="altBaslik">Furniture & Wood</h4>  <br></br>
        Offering speciality products that are specifically designed to benefit the Furniture & Wood industry.</p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-G">G</h4> <p className="product-G">
        <h4 className="altBaslik">Gun Coatings</h4> <br></br>
        Developing innovative new formulations to optimise abrasion performance with 9H hardness and meet the demanding needs of the heat resistance of Gun Industry with 1200 C heat resistance.</p> 
        <h4 className="baslik-G"></h4> <p className="product-G">Gun coatings are chemical treatments applied to firearms to protect them from corrosion, increase their resistance to nicks and scratches, and enhance their appearance.
         <br></br>
        </p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-H">H</h4> <p className="product-H">
        <h4 className="altBaslik">HVAC Anti- microbial Coatings</h4>   <br></br>
        Supporting HVAC industry to create safer ventilation that are tailored to their specific clean room needs.</p> 
        <h4 className="baslik-H"></h4> <p className="product-H">HVAC antimicrobial coatings are chemical treatments applied to the surfaces of HVAC ductwork and other components to protect them from harmful microbial growth, such as bacteria
         <br></br>
        </p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-I">I</h4> <p className="product-I">
        <h4 className="altBaslik">Industrial Coatings</h4>  <br></br>
        Our range of industrial coatings are derived from experience, easy to use and durable solutions.</p> 
        <h4 className="baslik-I"></h4> <p className="product-I">Industrial coatings are a type of paint that is applied to various derivatives such as concrete or steel in order to provide both aesthetic and protective properties. 
        <br></br>
        </p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-P">P</h4> <p className="product-P">
        <h4 className="altBaslik">PVDF Clear for UV resistance</h4>  <br></br>
        PVDF Clear gives multitude of products scientifically crafted to enhance a wide range of applications in the exterior, resistance, on paints, plastics, tents, and structured fabrics.</p> 
        <h4 className="baslik-P"></h4> <p className="product-P">
        <h4 className="altBaslik">Protection and Selective Sun Shading</h4>  <br></br>
        Sustainable PVDF CLEAR LK980 a selectivity-based shading top coat that allows the sun’s visible light to pass indoors while keeping its heat outdoors. The relationship of light transmittance to the total solar transmittance. The translucent, heat-reflecting series help you save % 50 - 65 energy.</p> 
      </div>
      <div className="tripcard">
        <h4 className="baslik-P"></h4> <p className="product-P">
        <h4 className="altBaslik">PVDF Protected Bright Gold Paint </h4>  <br></br>
        Offering a wide range of high purity gold effects to make exterior resitant and bright more durable and easy to use solutions.</p> 
        <h4 className="baslik-P"></h4> <p className="product-P">
        <h4 className="altBaslik">Protected Bronze Paint</h4>  <br></br>
        Paint 1000 C resistant based paint materials for sustainable thermal regulation.</p> 
      </div>
      <div className="tripcard">
        <h4 className="baslik-P"></h4> <p className="product-P">
        <h4 className="altBaslik">PVDF Protected Brass Gold Paint</h4>  <br></br>
        Offering a wide range of high purity gold effects to make exterior resitant and bright more durable and sustainable products through the use of innovative technologies.</p> 
        <h4 className="baslik-P"></h4> <p className="product-P">PVDF (polyvinylidene fluoride) protected brass gold paint is a type of coating that is used to protect metal architecture and building components.
        <br></br>
        </p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-S">S</h4> <p className="product-S">
        <h4 className="altBaslik">Sound Blocking Paint 4</h4>  <br></br>
        4 Layer Sound Blocking Paint: Mass Primer, Damping Layer, Decoupling Paint, Absorption Top Coat</p> 
        <h4 className="baslik-S"></h4> <p className="product-S">
        <h4 className="altBaslik">Super Durable Coatings</h4>   <br></br>
        Providing speciality ingredients developed for a range of super durable products and QUV tested that can increase paint durability 20.000 hours resistance and advocacy through greater result, enhanced durability, improved aesthetics and better outcomes.</p> <br></br>
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-T">T</h4> <p className="product-T">
        <h4 className="altBaslik">Textile Coatings</h4> <br></br>
        Utilising expert industry knowledge to deliver innovative finishes for Textiles Accessories.</p><br></br> 
        <h4 className="baslik-T"></h4> <p className="product-T">Textile coatings are chemical treatments applied to textiles to enhance and extend their performance and aesthetic appeal.
           <br></br>
        </p> 
      </div>
      <br></br><hr></hr>
      <div className="tripcard">
        <h4 className="baslik-W">W</h4> <p className="product-W">
        <h4 className="altBaslik">Wind Turbine Coatings</h4>  <br></br>
        Creating 500 km/h speed rain drop resistant coatings surface and technologies to deliver the complete package.</p><br></br> 
        <h4 className="baslik-W"></h4> <p className="product-W">Wind turbine coatings protect against the erosion and corrosion of the structure due to the harsh environmental conditions they face every day.
        <br></br>
        </p> 
      </div>
    </div>
  );
}

export default Trip;
