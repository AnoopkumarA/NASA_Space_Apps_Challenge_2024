import type React from "react";
import '../../App.css'
import { Meteors } from "../../components/ui/meteors";

const mars: React.FC = () => {
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
              src="./assets/marss.png"
              alt="Neptune"
              className="object-cover w-3/4 h-auto mb-10 rounded-lg"
            />
  
          </div>
  
          {/* Right side: Planet details */}
          <div className="flex items-center justify-center h-full p-8 text-white">
            <div className="relative flex flex-col items-center justify-center h-full p-8 text-white">
              {/* Mercury heading centered with margin to adjust vertical position */}
              <h1 className="mb-4 text-5xl font-bold">Mars</h1>
              <p className="mb-4 text-xl">
                Mars, known as the Red Planet, is the fourth planet from the Sun. Its reddish appearance is due to iron oxide, commonly known as rust, on its surface. Mars is a terrestrial planet with a thin atmosphere, primarily composed of carbon dioxide.
              </p>
  
              <p className="mb-4 text-xl">
                Mars has the largest volcano in the solar system, Olympus Mons, which is about 13.6 miles (22 kilometers) high, and a canyon system, Valles Marineris, that stretches over 2,500 miles (4,000 kilometers).
              </p>
  
              <p className="mb-4 text-xl">
                The planet experiences seasons similar to Earth, with polar ice caps that grow and recede with the seasons. Mars has two small moons, Phobos and Deimos, which are thought to be captured asteroids.
              </p>
  
        
  
              <h2 className="mb-2 text-3xl font-semibold">Key Facts</h2>
              <ul className="list-disc list-inside">
                <li><strong>Orbital period:</strong> 687 days</li>
                <li><strong>Diameter:</strong> 6,779 km</li>
                <li><strong>Distance from Sun:</strong> 227.9 million km</li>
                <li><strong>Gravity:</strong> 3.71 m/s²</li>
                <li><strong>Length of day:</strong> 24.6 hours</li>
                <li><strong>Surface temperature:</strong> -63°C</li>
                <li><strong>Magnetic field:</strong> Weak and irregular</li>
                <li><strong>Atmosphere:</strong> Thin atmosphere with carbon dioxide, nitrogen, and argon</li>
              </ul>
  
              <p className="mt-4 text-lg">
                Mars has been a target for exploration by numerous missions, including orbiters, landers, and rovers. Ongoing missions aim to search for signs of past life and to prepare for future human exploration.
              </p>
              </div>
  
            </div>
          </div>
          
        </div>
        {/* Section 2: Moons of Mercury */}
        <div className="w-full p-8 text-white bg-black">
            <h2 className="mb-4 text-3xl font-bold">Moons of Mars</h2>
            <p className="mb-4 text-xl">
              Mars has two moons: Phobos and Deimos. Phobos is the larger of the two, and it orbits Mars so quickly that it rises in the west and sets in the east. Deimos is smaller and orbits Mars at a greater distance.
            </p>
          </div>
  
          {/* Section 3: Comparison with Earth */}
          <div className="w-full p-8 text-white bg-black">
            <h2 className="mb-4 text-3xl font-bold">Comparison with Earth</h2>
            <p className="mb-4 text-xl">
              While Mars and Earth share some similarities, there are notable differences:
            </p>

            <ul className="text-xl list-disc list-inside">
              <li><strong>Earth's Orbital period:</strong> 365 days vs. Mars' 687 days</li>
              <li><strong>Earth's Diameter:</strong> 12,742 km vs. Mars' 6,779 km</li>
              <li><strong>Earth's Gravity:</strong> 9.8 m/s² vs. Mars' 3.71 m/s²</li>
              <li><strong>Earth's Atmosphere:</strong> Dense vs. Mars' thin atmosphere</li>
              <li><strong>Surface Temperature:</strong> Earth: -88°C to 58°C vs. Mars: -63°C</li>
              <li><strong>Day Length:</strong> 24 hours vs. Mars' 24.6 hours</li>
            </ul>
          </div>
          {/* Section 4: NASA */}
          <div className="w-full p-4 md:p-8 bg-black mb-2 min-h-screen text-white -mb-[15rem]">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">NASA's Mars Exploration</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <div>
              <img
                  src="./assets/mars.jpeg" // Replace with an appropriate image link if needed
                  alt="Mars"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
              <p className="mb-4 text-base text-md md:text-xl">
                  Mars has been the focus of numerous exploration missions, including the Mars Rovers: Spirit, Opportunity, Curiosity, and Perseverance. These missions have provided significant insights into the planet's geology, climate, and potential for past life.
                </p>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Key Discoveries:</h3>
                <ul className="list-disc list-inside">
                <li>Evidence of liquid water in the past</li>
                  <li>Discovery of complex organic molecules</li>
                  <li>Detailed mapping of Martian surface features</li>
                  <li>Analysis of Martian soil and atmosphere</li>
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
                src="https://www.youtube.com/embed/R6K4M4Q09Kw?autoplay=1&mute=1&loop=1&playlist=R6K4M4Q09Kw" // Updated video link for Mars
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

export default mars;
