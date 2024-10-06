import React from "react";
import { Meteors } from "../../components/ui/meteors";
import MercuryFacts from "../../components/ui/sun";
import '../../App.css'
import NasaVideoSection from "../../components/ui/sunvideo";


const Clients: React.FC = () => {
  return (
    <>
     <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* Meteors animation in the background */}
      <Meteors number={150} />

      {/* Split layout for planet image and details */}
      <div className="absolute inset-0 grid grid-cols-2 items-center z-10">
        {/* Left side: Image of Mercury */}
        <div className="flex items-center justify-center">
        <img
          src="./assets/sun.png"
          alt="Sun"
          className="w-3/4 h-auto object-cover rounded-lg"
        />

        </div>

        {/* Right side: Planet details */}
        <div className="p-8 text-white flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center justify-center text-white h-full p-8">
            {/* Mercury heading centered with margin to adjust vertical position */}
            <h1 className="text-6xl font-bold mb-4">Sun</h1>
              
              <p className="text-xl mb-4">
                The Sun is the star at the center of our solar system, composed 
                The Sun is the star at the heart of our solar system. Its gravity holds the solar system together, keeping everything — from the biggest planets to the smallest bits of debris — in its orbit.
                   </p>
              <h2 className="text-5xl font-semibold mb-2 p-5">Key Facts</h2>
              <ul className="text-xl list-disc list-inside p-5">
                <li><strong>Type: </strong> G-type main-sequence star (G dwarf).</li>
                <li><strong>Diameter:</strong> 1.39 million km</li>
                <li><strong>Surface Temperature:</strong> About 5,500°C </li>
                <li><strong>Distance from Earth:</strong> 149.6 million kilometers</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="relative top-32">
<MercuryFacts/></div>

<div className="relative top-52 bg-black">
  {/* Title Section */}
  <h1 className="text-4xl font-bold text-white -mb-14 relative left-36">
    Know More!
  </h1>

  {/* NasaVideoSection Component */}
  <NasaVideoSection/>
</div>

        
        
    </>
  );
}

export default Clients;
