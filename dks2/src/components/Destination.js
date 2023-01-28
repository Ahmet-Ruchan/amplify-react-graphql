import React from "react";
import Mountain1 from "../assets/menu1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Developer of Key Solutions you have</h1>
        <p>We are the name behind the high performance ingredients and technologies in some of the biggest, most successful brands in the world: creating, making and selling speciality chemicals that are relied on by industries and consumers everywhere.</p>
        <DestinationData
          className="first-des"
          heading="Products"
          text="Innovative solutions for developing information, aviation, aerospace, energy, biology, automotive, construction, pharmaceutical industries. Developing and delivering sustainable ingredients is at the heart of our business."
          img1={Mountain1}
          img2={Mountain2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Who Are We?"
          text="We specialize in providing innovative solutions for various industries including information technology, aviation, aerospace, energy, biology, automotive, construction, and pharmaceuticals. Our focus is on developing and delivering sustainable ingredients that drive growth and success for our clients. We are committed to finding and implementing cutting-edge technologies to help our clients stay ahead of the competition and achieve their business goals."
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
