import React from "react";
import { Meteors } from "../../components/ui/meteors";


const contact: React.FC = () => {
    return (
        <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Meteors animation in the background */}
        <Meteors number={150} />
  
        {/* Split layout for planet image and details */}
        <div className="absolute inset-0 z-10 grid items-center grid-cols-2">
          {/* Left side: Image of Mercury */}
          <div className="flex items-center justify-center">
          <img
              src="./assets/nept.jpeg"
              alt="Neptune"
              className="object-cover w-3/4 h-auto mb-10 rounded-lg"
            />
  
          </div>
  
          {/* Right side: Planet details */}
          <div className="flex items-center justify-center h-full p-8 text-white">
            <div className="relative flex flex-col items-center justify-center h-full p-8 text-white">
              {/* Mercury heading centered with margin to adjust vertical position */}
              <h1 className="mb-4 text-5xl font-bold">Neptune</h1>
              <p className="mb-4 text-xl">
                Neptune is the eighth and farthest planet from the Sun in our solar system. It is known for its striking blue color due to the presence of methane in its atmosphere. Neptune is the smallest of the gas giants and is often referred to as an ice giant due to its unique composition.
              </p>
  
              <p className="mb-4 text-xl">
                It takes about 165 Earth years to complete one orbit around the Sun. Neptune has a dynamic atmosphere with the strongest winds in the solar system, reaching speeds of over 2,100 km/h (1,300 mph).
              </p>
  
              <p className="mb-4 text-xl">
                The planet has a faint ring system and at least 14 known moons, with Triton being the largest. Triton is unique because it is one of the few moons in the solar system that orbits in the opposite direction to its planet's rotation.
              </p>
  
        
  
              <h2 className="mb-2 text-3xl font-semibold">Key Facts</h2>
              <ul className="list-disc list-inside">
                <li><strong>Orbital period:</strong> 165 years</li>
                <li><strong>Diameter:</strong> 49,244 km</li>
                <li><strong>Distance from Sun:</strong> 4.5 billion km</li>
                <li><strong>Gravity:</strong> 11.0 m/s²</li>
                <li><strong>Length of day:</strong> 16 hours</li>
                <li><strong>Surface temperature:</strong> -214°C</li>
                <li><strong>Magnetic field:</strong> Present</li>
                <li><strong>Atmosphere:</strong> Thick atmosphere with hydrogen, helium, and methane</li>
              </ul>
  
              <p className="mt-4 text-lg">
                Neptune was discovered in 1846 and has been studied by several spacecraft, including Voyager 2, which provided valuable information about its atmosphere and rings.
              </p>
              </div>
  
            </div>
          </div>
          
        </div>
        {/* Section 2: Moons of Mercury */}
        <div className="w-full p-8 text-white bg-black">
            <h2 className="mb-4 text-3xl font-bold">Moons of Neptune</h2>
            <p className="mb-4 text-xl">
              Neptune has 14 known moons, with Triton being the largest. Triton is unique for its retrograde orbit, suggesting it may have been captured by Neptune's gravity rather than forming in place.
            </p>
          </div>
  
          {/* Section 3: Comparison with Earth */}
          <div className="w-full p-8 text-white bg-black">
            <h2 className="mb-4 text-3xl font-bold">Comparison with Earth</h2>
            <p className="mb-4 text-xl">
              While Neptune and Earth are both planets, there are significant differences:
            </p>
            <ul className="text-xl list-disc list-inside">
              <li><strong>Earth's Orbital period:</strong> 365 days vs. Neptune's 165 years</li>
              <li><strong>Earth's Diameter:</strong> 12,742 km vs. Neptune's 49,244 km</li>
              <li><strong>Earth's Gravity:</strong> 9.8 m/s² vs. Neptune's 11.0 m/s²</li>
              <li><strong>Earth's Atmosphere:</strong> Dense vs. Neptune's thick atmosphere</li>
              <li><strong>Surface Temperature:</strong> Earth: -88°C to 58°C vs. Neptune: -214°C</li>
              <li><strong>Day Length:</strong> 24 hours vs. Neptune's 16 hours</li>
            </ul>
          </div>
          {/* Section 4: NASA */}
          <div className="w-full p-4 md:p-8 bg-black mb-2 min-h-screen text-white -mb-[15rem]">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">NASA's Neptune Exploration</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <div>
              <img
                  src="./assets/nep.jpeg" // Replace with an appropriate image link if needed
                  alt="Neptune"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
              <p className="mb-4 text-base text-md md:text-xl">
                  Neptune has been explored mainly through ground-based telescopes and the Voyager 2 spacecraft, which provided the first close-up images of the planet in 1989. These missions have significantly enhanced our understanding of Neptune's atmosphere, rings, and moons.
                </p>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Key Discoveries:</h3>
                <ul className="list-disc list-inside">
                  <li>Discovered the presence of great dark spots in Neptune's atmosphere</li>
                  <li>Uncovered details about Neptune's ring system</li>
                  <li>Provided insights into the planet's weather patterns and winds</li>
                  <li>Identified Triton's unique features and retrograde orbit</li>
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
                src="https://www.youtube.com/embed/NwEZKjkRgeY?autoplay=1&mute=1&loop=1&playlist=NwEZKjkRgeY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        </>
    );
}

export default contact;
