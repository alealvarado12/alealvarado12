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
    setOpacity(1);
  }, []);

  return (
    <div className=" ml-[12.5vw] h-[65vh] w-[75vw] outline  ">
      <div className="w-full ">
        <h2 className="text-center text-[2rem] font-bold font-title">My Projects</h2>
      </div>
      <div className=" flex flex-row h-full w-full justify-evenly">
        <div className="flex flex-col w-[20vw] outline mt-10 mb-20 rounded-md">
          <div className="text-center outline text-[2rem] font-subtitle">
            <h2>Virtual Pet</h2>
          </div>
          <div className=" outline h-[35vh] p-7">
            <img src={virtualPet} className=" h-full w-full  rounded-2xl" />
          </div>
          <div className="outline text-[1.48rem] mt-1 font-body">
            <p className="">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              iste magni odit perspiciatis illum sit laborum. Voluptas,
              consequuntur sequi fugit sint in odit iste id! Visit  <span><a className="underline" href="">here</a></span> 
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[20vw] outline mt-10 mb-20 rounded-md text">
          <div className="text-center outline text-[2rem] font-subtitle">
            <h2>Jac Enterprise</h2>
          </div>
          <div className=" outline h-[35vh] p-7">
            <img src={NasaJac} className=" h-full w-full  rounded-2xl" />
          </div>
          <div className="outline text-[1.48rem] mt-1 font-body ">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              iste magni odit perspiciatis illum sit laborum. Voluptas,
              consequuntur sequi fugit sint in odit iste id! Visit  <span><a className="underline" href="">here</a></span> 
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[20vw] outline mt-10 mb-20 rounded-md">
          <div className="text-center outline text-[2rem] font-subtitle">
            <h2>Note Taking</h2>
          </div>
          <div className=" outline h-[35vh] p-7">
            <img src={noteTaking} className=" h-full w-full  rounded-2xl" />
          </div>
          <div className="outline text-[1.48rem] mt-1 font-body ">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              iste magni odit perspiciatis illum sit laborum. Voluptas,
              consequuntur sequi fugit sint in odit iste id! Visit  <span><a className="underline" href="">here</a></span> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
