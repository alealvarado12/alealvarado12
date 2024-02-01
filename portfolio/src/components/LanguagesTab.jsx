/* eslint-disable no-unused-vars */
import java from "../assets/languages/Java.png"
import HTML from "../assets/languages/HTML.png"
import Js from "../assets/languages/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d8281ca7a10.3507952115443892498294.png"
import Css from "../assets/languages/kisspng-web-development-responsive-web-design-cascading-st-css-5ada20d893b5d9.420807251524244696605.png"
import react from "../assets/languages/react.png"
import Spring_boot from "../assets/languages/Spring_Boot.png"
import cSharp from "../assets/languages/C-Sharp-logo.png"
import Tailwind from "../assets/languages/tailwind-css.256x154.png"
import SQL from "../assets/languages/SQL.png"
import Github from "../assets/Github-logo.png"

function languagesTab() {
  return (
    <div className=" ">
      <div className="w-[40] h-[5vh] mt-[10vh] m-[20vh] items-start flex justify-start mb-1 bg-[#DAC0A3] ">
        <h2 className="text-[2rem] ml-[10vw] underline text-center font-subtitle ">Technologies used: </h2>
      </div>
      <div className="w-[40] h-[5vh] mr-[20vh] ml-[20vh] items-start flex justify-evenly ">
        <h2 className=" w-[40%] text-[2rem] text-center font-Subbody">Languages</h2>
        <h2 className="w-[40%] text-[2rem] text-center font-Subbody ">Built Tools</h2>
      </div>
      <div className="m-[20vh] mt-0 h-[40vh] w-[40wv] flex flex-wrap max-w-[60wv] justify-evenly ">
        <div className="flex flex-row justify-evenly flex-wrap w-[40%] h-[85%] rounded-md shadow-md">

          {/* Language icons */}
          <div className="h-20 w-[6vw] mt-10 cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 ">
            <img src={java} className="object-fit" alt="" />
          </div>
          <div className="h-20 w-[5vw] mt-10 cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 ">
            <img src={HTML} className="object-fit" alt="" />
          </div>
          <div className="h-20 w-[5vw] mt-10 cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 ">
            <img src={cSharp} className="object-fit" alt="" />
          </div>
          <div className="h-[9vh] w-[5vw] mt-10 cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 mb-0">
            <img src={Js} className="h-full object-fit" alt="" />
          </div>
          <div className="h-20 w-[5vw] mt-10 cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 mb-0 ">
            <img src={Css} className="object-fit" alt="" />
          </div>

        </div>
        <div className="flex flex-row justify-evenly rounded-md shadow-md flex-wrap w-[40%] h-[85%]">

          {/* Built tools icons */}
          <div className="h-20 w-[6vw] mt-10 cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 ">
            <img src={react} className="object-fit" alt="" />
          </div>
          <div className="h-20 w-[5vw] mt-10 file:cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 ">
            <img src={Spring_boot} className="object-fit" alt="" />
          </div>
          <div className="h-20 w-[5vw] mt-10 cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 ">
            <img src={Tailwind} className="object-fit" alt="" />
          </div>
          <div className="h-20 w-[5vw] mt-10 cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 mb-0 ">
            <img src={Github} alt="" />
          </div>
          <div className="h-20 w-[5vw] cursor-pointer rounded-md m-14 transition-transform transform-gpu hover:scale-105 mb-0 ">
            <img src={SQL} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default languagesTab;
