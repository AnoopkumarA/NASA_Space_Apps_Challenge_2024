import React from "react";
import '../../App.css'
import { Meteors } from "../../components/ui/meteors";

const home: React.FC = () => {
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
            src="./assets/mercury.png"
            alt="Mercury"
            className="w-3/4 h-auto object-cover rounded-lg mb-10"
          />
  
          </div>
  
          {/* Right side: Planet details */}
          <div className="p-8 text-white flex items-center justify-center h-full">
            <div className="relative flex flex-col items-center justify-center text-white h-full p-8">
              {/* Mercury heading centered with margin to adjust vertical position */}
              <h1 className="text-5xl font-bold mb-4">Mercury</h1>
                <p className="text-xl mb-4">
                  Mercury is the smallest planet in our solar system and the closest to the
                  Sun. It’s only slightly larger than Earth's Moon. Mercury takes 88 Earth
                  days to complete one orbit around the Sun, and its surface temperatures can
                  range from extremely hot to extremely cold.
                </p>
  
                <p className="text-xl mb-4">
                  With almost no atmosphere to retain heat, Mercury’s surface experiences
                  temperature fluctuations of more than 600 degrees Celsius between day and
                  night. Daytime temperatures can reach up to 430°C, while at night, it can
                  drop to -180°C.
                </p>
  
                <p className="text-xl mb-4">
                  Despite its proximity to the Sun, Mercury is not the hottest planet in the
                  solar system; that title belongs to Venus due to its thick atmosphere. The
                  planet also has the most eccentric orbit, meaning its distance from the Sun
                  varies considerably during its orbit.
                </p>
  
        
  
                <h2 className="text-3xl font-semibold mb-2">Key Facts</h2>
                <ul className="list-disc list-inside">
                  <li><strong>Orbital period:</strong> 88 days</li>
                  <li><strong>Diameter:</strong> 4,880 km</li>
                  <li><strong>Distance from Sun:</strong> 57.9 million km</li>
                  <li><strong>Gravity:</strong> 3.7 m/s²</li>
                  <li><strong>Length of day:</strong> 59 Earth days</li>
                  <li><strong>Surface temperature:</strong> -180°C to 430°C</li>
                  <li><strong>Magnetic field:</strong> Present but weak</li>
                  <li><strong>Atmosphere:</strong> Thin exosphere</li>
                </ul>
  
                <p className="text-lg mt-4">
                  Mercury has been visited by two spacecraft: Mariner 10 and MESSENGER.
                  MESSENGER orbited Mercury more than 4,000 times between 2011 and 2015,
                  sending back detailed maps and images of the planet’s surface.
                </p>
              </div>
  
            </div>
          </div>
          
        </div>
        {/* Section 2: Moons of Mercury */}
        <div className="w-full p-8 bg-black  text-white">
            <h2 className="text-3xl font-bold mb-4">Moons of Mercury</h2>
            <p className="text-xl mb-4">
              Mercury has no moons or rings. Its proximity to the Sun and its relatively small size
              prevents it from retaining any moons.
            </p>
          </div>
  
          {/* Section 3: Comparison with Earth */}
          <div className="w-full p-8 bg-black  text-white">
            <h2 className="text-3xl font-bold mb-4">Comparison with Earth</h2>
            <p className="text-xl mb-4">
              While Mercury and Earth are both rocky planets, there are significant differences:
            </p>
            <ul className="list-disc text-xl list-inside">
              <li><strong>Earth's Orbital period:</strong> 365 days vs. Mercury's 88 days</li>
              <li><strong>Earth's Diameter:</strong> 12,742 km vs. Mercury's 4,880 km</li>
              <li><strong>Earth's Gravity:</strong> 9.8 m/s² vs. Mercury's 3.7 m/s²</li>
              <li><strong>Earth's Atmosphere:</strong> Dense vs. Mercury's thin exosphere</li>
              <li><strong>Surface Temperature:</strong> Earth: -88°C to 58°C vs. Mercury: -180°C to 430°C</li>
              <li><strong>Day Length:</strong> 24 hours vs. Mercury's 59 Earth days</li>
            </ul>
          </div>
          {/* Section 4: NASA */}
          <div className="w-full p-4 md:p-8 bg-black mb-2 min-h-screen text-white -mb-[15rem]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">NASA's Mercury MESSENGER Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <img
                  src="https://www.universetoday.com/wp-content/uploads/2013/03/Limb_mosaic2-e1664565819910.jpg"
                  alt="Mercury's southern hemisphere"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <p className="text-base text-md md:text-xl mb-4">
                  The MESSENGER (MErcury Surface, Space ENvironment, GEochemistry, and Ranging) mission was a NASA spacecraft
                  that orbited Mercury between 2011 and 2015. It was the first spacecraft to orbit Mercury and provided
                  unprecedented data about the planet's composition, geology, and magnetic field.
                </p>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Key Discoveries:</h3>
                <ul className="list-disc list-inside">
                  <li>Confirmed the presence of water ice in permanently shadowed craters at Mercury's poles</li>
                  <li>Mapped Mercury's surface composition, revealing unexpected concentrations of elements</li>
                  <li>Discovered that Mercury's magnetic field is offset from the planet's center</li>
                  <li>Observed that Mercury is still geologically active, with evidence of recent volcanic activity</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* YouTube Video Section */}
        <div className="w-full min-h-screen bg-black text-white flex items-center justify-center -mt-[19rem]">
          <div className="p-4 md:p-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NOZKXLWuraQ?start=6&autoplay=1&mute=1&loop=1&playlist=NOZKXLWuraQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
 
            </>
       
    );
}

export default home;
