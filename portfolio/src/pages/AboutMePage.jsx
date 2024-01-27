import facebookLogo from "../assets/Facebook-Logo-2023.png";
import githubLogo from "../assets/Github-logo.png";
import linkedinLogo from "../assets/LinkedIn-logo-initials.png";
import pfp from "../assets/SebastianPFP.jpg";
import SlideShow from "../components/Slideshow";

function AboutMePage() {
  return (
    <div className=" h-[80vh] w-[100vw]">
      <div className="about-me flex flex-row justify-evenly ">
        <div className=" w-[30%] h-[50vh] outline mt-[5%]">
          <div className="name-container outline text-center">
            <h1 className="text-[4rem]">Sebastian Alvarado</h1>
          </div>
          <div className="position-container outline text-center ">
            <h2 className="text-[2rem] text-[#efe1d1]">
              |Full Stack Java Developer|
            </h2>
          </div>
          <div className="socials flex flex-row space-x-2 outline justify-evenly ">
            <a href="https://www.facebook.com/">
              <img src={facebookLogo} alt="" className="h-12" />
            </a>
            <a href="">
              <img src={githubLogo} alt="" className="h-12" />
            </a>
            <a href="">
              <img src={linkedinLogo} alt="" className="h-12" />
            </a>
          </div>
          <div className="bio text-justify text-[1.3rem]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              nulla in pariatur accusantium, amet saepe earum rerum cupiditate
              minima. Voluptatem accusamus, reiciendis aliquid saepe rem
              eligendi ipsum aut ex officia, quod aperiam illum eveniet
              excepturi, eaque repellat rerum optio tempore dignissimos voluptas
              deserunt voluptatum deleniti.
            </p>
          </div>
        </div>
        <div className=" w-[650px] h-[500px] mt-[5%] outline">
          <img src={pfp} alt="" className=" h-full w-full p-5 " />
        </div>
      </div>
    </div>
  );
}
export default AboutMePage;
