import React, { useState, useEffect } from "react";
import virtualPet from "../assets/VirtualPets.jpg";
import noteTaking from "../assets/notetaking.jpg";
import NasaJac from "../assets/NasaJac.jpg";
function SlideShow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleButtonClick = (offset) => {
    const newIndex = (activeIndex + offset + 3) % 3;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    setOpacity(1);},[]);

  return (
    <div className="project-slideshow flex relative justify-center ">
      <div
        className="slide-container relative mt-[5vh] mb-[10vh] bg-[#f5deb300] rounded-xl w-[70vw] h-[60vh]  "
        data-carousel
      >
        <button
          className="carousel-button prev absolute bg-none border-none font-[4rem] top-1/2 z-20 translate-y-[-50%] rounded-sm cursor-pointer p-2 bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.2)] hover:text-white focus:bg-[rgba(0,0,0,.2)] focus:text-white focus:outline left-[1rem]"
          onClick={() => handleButtonClick(-1)}
        >
          &#8656;
        </button>
        <button
          className="carousel-button next absolute bg-none border-none font-[4rem] top-1/2 z-20 translate-y-[-50%] rounded-sm cursor-pointer p-2 bg-[rgba(0,0,0,.1)] hover:bg-[rgba(0,0,0,.2)] hover:text-white focus:bg-[rgba(0,0,0,.2)] focus:text-white right-[1rem] focus:outline"
          onClick={() => handleButtonClick(1)}
        >
          &#8658;
        </button>

        <ul data-slides className="m-0 p-0 relative h-full">
          <li
            className={`slide absolute  inset-0 opacity-${opacity} transition-opacity ease-in-out delay-200 duration-[200ms]  ${
              activeIndex === 0 ? "active" : "opacity-0"
            }`}
          >
            <img
              src={virtualPet}
              alt="virtual-pet"
              className="h-full w-full object-fill "
            />
          </li>
          <li
            className={`slide absolute inset-0 opacity-${opacity} transition-opacity ease-in-out delay-200 duration-[200ms] ${
              activeIndex === 1 ? "active" : "opacity-0"
            }`}
          >
            <img
              src={noteTaking}
              alt="Note-taking"
              className="h-full w-full object-fill"
            />
          </li>
          <li
            className={`slide absolute inset-0 opacity-${opacity}  transition-opacity ease-in-out delay-200 duration-[200ms] ${
              activeIndex === 2 ? "active" : "opacity-0"
            }`}
          >
            <img
              src={NasaJac}
              alt="Jac Enterprises"
              className="h-full w-full object-fill"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SlideShow;
