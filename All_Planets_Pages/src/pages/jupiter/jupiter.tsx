
import React from "react";
import { Meteors } from "../../components/ui/meteors";

const jupiter: React.FC = () => {
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
              src="./assets/jupit.png"
              alt="jupiter"
              className="object-cover w-3/4 h-auto mb-10 rounded-lg"
            />
  
          </div>
  
          {/* Right side: Planet details */}
          <div className="flex items-center justify-center h-full p-8 text-white">
            <div className="relative flex flex-col items-center justify-center h-full p-8 text-white">
              {/* Mercury heading centered with margin to adjust vertical position */}
              <h1 className="mb-4 text-5xl font-bold">Jupiter</h1>
              <p className="mb-4 text-xl">
                  Jupiter is the largest planet in our solar system, known for its massive size 
                  and distinctive bands of clouds. It's a gas giant, primarily composed of hydrogen 
                  and helium, with a diameter of about 142,984 km.
                </p>

                <p className="mb-4 text-xl">
                  Jupiter has a very strong magnetic field and is home to a diverse set of 
                  moons, with over 79 known. Its most famous moon is Europa, which is believed 
                  to have a subsurface ocean beneath its icy crust, making it a candidate for 
                  extraterrestrial life.
                </p>

                <p className="mb-4 text-xl">
                  The planet has a fast rotation speed, completing one rotation approximately 
                  every 10 hours, which contributes to its flattened shape. Its Great Red Spot, 
                  a massive storm larger than Earth, has been raging for hundreds of years.
                </p>
  
        
  
              <h2 className="mb-2 text-3xl font-semibold">Key Facts</h2>
              <ul className="list-disc list-inside">
                  <li><strong>Orbital period:</strong> 11.9 years</li>
                  <li><strong>Diameter:</strong> 142,984 km</li>
                  <li><strong>Distance from Sun:</strong> 778 million km</li>
                  <li><strong>Gravity:</strong> 24.79 m/s²</li>
                  <li><strong>Length of day:</strong> 9.9 hours</li>
                  <li><strong>Surface temperature:</strong> -145°C</li>
                  <li><strong>Moons:</strong> 79 (including Europa, Ganymede, and Callisto)</li>
                  <li><strong>Atmosphere:</strong> Hydrogen, helium, ammonia, methane</li>
                </ul>
  
                <p className="mt-4 text-lg">
                  Jupiter has been visited by several spacecraft, including the Galileo orbiter, 
                  which studied the planet and its moons from 1995 to 2003, and more recently, 
                  the Juno spacecraft, which is currently studying the planet's atmosphere and 
                  magnetic field.
                </p>
              </div>
  
            </div>
          </div>
          
        </div>
        {/* Section 2: Moons of Mercury */}
        <div className="w-full p-8 text-white bg-black">
            <h2 className="mb-4 text-3xl font-bold">Moons of Jupiter</h2>
            <p className="mb-4 text-xl">
              Jupiter has a large number of moons, with 79 confirmed so far. The four largest 
              moons, known as the Galilean moons, are Io, Europa, Ganymede, and Callisto. 
              Each of these moons has unique features and geological characteristics.
            </p>
          </div>
  
          {/* Section 3: Comparison with Earth */}
          <div className="w-full p-8 text-white bg-black">
            <h2 className="mb-4 text-3xl font-bold">Comparison with Earth</h2>
            <p className="mb-4 text-xl">
              While Jupiter and Earth are both planets, their characteristics differ greatly:
            </p>

            <ul className="text-xl list-disc list-inside">
              <li><strong>Earth's Orbital period:</strong> 365 days vs. Jupiter's 11.9 years</li>
              <li><strong>Earth's Diameter:</strong> 12,742 km vs. Jupiter's 142,984 km</li>
              <li><strong>Earth's Gravity:</strong> 9.8 m/s² vs. Jupiter's 24.79 m/s²</li>
              <li><strong>Earth's Atmosphere:</strong> Nitrogen and oxygen vs. Jupiter's hydrogen and helium</li>
              <li><strong>Surface Temperature:</strong> Earth: -88°C to 58°C vs. Jupiter: -145°C</li>
              <li><strong>Day Length:</strong> 24 hours vs. Jupiter's 9.9 hours</li>
            </ul>
          </div>
          {/* Section 4: NASA */}
          <div className="w-full p-4 md:p-8 bg-black mb-2 min-h-screen text-white -mb-[15rem]">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">NASA's Juno Mission</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <div>
              <img
                  src="./assets/jupi.jpeg" // Replace with an appropriate image link if needed
                  alt="jupiter"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
              <p className="mb-4 text-base text-md md:text-xl">
                  The Juno mission is a NASA space probe currently studying Jupiter. Launched in 2011, Juno entered 
                  Jupiter's orbit in 2016 and has provided invaluable data about the planet's atmosphere, gravity, 
                  magnetic field, and deep interior structure.
                </p>

                <h3 className="mb-2 text-lg font-semibold md:text-xl">Key Discoveries:</h3>
                <ul className="list-disc list-inside">
                  <li>Revealed the planet's complex cloud structure and deep atmospheric dynamics</li>
                  <li>Found that Jupiter has a very faint ring system</li>
                  <li>Discovered a large, asymmetrical magnetic field</li>
                  <li>Provided insights into the planet's origins and evolution</li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* YouTube Video Section */}
          <div className="w-full min-h-screen bg-black text-white flex items-center justify-center -mt-[19rem]">
          <div className="p-4 md:p-8">
            <div className="aspect-w-16 aspect-h-9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aJ3p6QKg_i8?si=dsBmmtJX4RnPme-f&amp;controls=0&amp;start=12" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        </>
           );
        }
    export default jupiter;