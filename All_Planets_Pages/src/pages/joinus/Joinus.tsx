import React from "react";
import '../../App.css'
import { Meteors } from "../../components/ui/meteors";
import EarthFacts from "../../components/ui/earth";
import EarthVideoSection from "../../components/ui/earthvideo";


const Joinus: React.FC = () => {
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
          src="./assets/earth.jpeg"
          alt="Earth"
          className="w-3/4 h-auto object-cover rounded-lg"
        />

        </div>

        {/* Right side: Planet details */}
        <div className="p-8 text-white flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center justify-center text-white h-full p-8">
            {/* Mercury heading centered with margin to adjust vertical position */}
            <h1 className="text-6xl font-bold mb-4">Earth</h1>
              
              <p className="text-xl mb-4">
                TEarth is the third planet from the Sun and the only known astronomical object to support life. It has a unique atmosphere, rich in oxygen, and a diverse environment, including land, water, and air. Earth’s surface is about 71% water, mostly oceans, and it has a dynamic system of tectonic plates that shape its landmasses over time. It is the densest planet in the solar system and the largest of the four terrestrial planets.</p>
              <h2 className="text-5xl font-semibold mb-2 p-5">Key Facts</h2>
              <ul className="text-xl list-disc list-inside p-5">
                <li><strong>Age: </strong> Approximately 4.54 billion.</li>
                <li><strong>Diameter:</strong> 12,742 km</li>
                <li><strong>Mass:</strong> 5.97 × 10^24 kg </li>
                <li><strong>Rotation Period (Day):</strong> 23.93 hours</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="relative top-32">
<EarthFacts/></div>

<div className="relative top-52 bg-black">
  {/* Title Section */}
  <h1 className="text-4xl font-bold text-white -mb-10 relative left-36">
    Know More!
  </h1>

  {/* NasaVideoSection Component */}
  <EarthVideoSection/>
</div>

        
</>
       
    );
}

export default Joinus;