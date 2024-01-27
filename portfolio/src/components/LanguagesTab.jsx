/* eslint-disable no-unused-vars */
import java from "../assets/languages/Java.png"
import HTML from "../assets/languages/HTML.png"
import Js from "../assets/languages/kisspng-javascript-angularjs-node-js-computer-icons-clip-a-clipart-js-5c0d8281ca7a10.3507952115443892498294.png"
import Css from "../assets/languages/kisspng-web-development-responsive-web-design-cascading-st-css-5ada20d893b5d9.420807251524244696605.png"
import react from "../assets/languages/react.png"
import Spring_boot from "../assets/languages/Spring_Boot.png"
import cSharp from "../assets/languages/C-Sharp-logo.png"
import Tailwind from "../assets/languages/tailwind-css.256x154.png"
function languagesTab(){

return(
<div
className="m-[20vh]  h-[70vh] w-[40wv] outline flex flex-wrap max-w-[60wv] justify-evenly"
>
<div className=" h-80 w-80 cursor-pointer rounded-md mt-5 transition-transform transform-gpu hover:scale-105 shadow-xl " ><img src={java} className="h-full outline " alt="" /></div>
<div className=" h-80 w-80 cursor-pointer rounded-md mt-5 transition-transform transform-gpu hover:scale-105  shadow-xl "><img src={HTML} className="h-full  "  alt="" /></div>
<div className=" h-80 w-80 cursor-pointer rounded-md mt-5 transition-transform transform-gpu hover:scale-105  shadow-xl"><img src={Js} className="h-full "  alt="" /></div>
<div className=" h-80 w-80 cursor-pointer rounded-md mt-5 transition-transform transform-gpu hover:scale-105  shadow-xl"><img src={Css} className="h-full  "  alt="" /></div>
<div className=" h-80 w-80 cursor-pointer rounded-md mt-5 transition-transform transform-gpu hover:scale-105  shadow-xl"><img src={react} className="h-full  "  alt="" /></div>
<div className=" h-80 w-80 cursor-pointer rounded-md mt-5 transition-transform transform-gpu hover:scale-105  shadow-xl"><img src={Spring_boot } className="h-full "  alt="" /></div>
<div className=" h-80 w-80 cursor-pointer  rounded-md mt-5 transition-transform transform-gpu hover:scale-105  shadow-xl"><img src={Tailwind} className="h-full  "  alt="" /></div>
<div className=" h-80 w-80 cursor-pointer rounded-md mt-5 transition-transform transform-gpu hover:scale-105  shadow-xl"><img src={cSharp} className="h-full  "  alt="" /></div>

</div>
    
)

}
export default languagesTab