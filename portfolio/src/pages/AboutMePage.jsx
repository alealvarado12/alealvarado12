import facebookLogo from "../assets/Facebook-Logo-2023.png";
import githubLogo from "../assets/Github-logo.png";
import linkedinLogo from "../assets/LinkedIn-logo-initials.png";
import pfp from "../assets/SebastianPFP.jpg";
import SlideShow from "../components/Slideshow";

function AboutMePage() {
  return (
    <div className=" h-[80vh] w-[100vw]">
      <div className="about-me flex flex-row justify-evenly  ">
        <div className=" w-[30%] h-[50vh]  mt-[5%] outline ">
          <div className="name-container text-center">
            <h1 className="text-[4rem] text-[#102C57] ">Sebastian Alvarado</h1>
          </div>
          <div className="position-container  text-center ">
            <h2 className="text-[2rem] text-[#102C57] font-bold font-Subbody">
              ~|Full Stack Java Developer|~
            </h2>
          </div>
          <div className="socials flex flex-row space-x-2 mt-2  justify-center items-center">
            <a href="https://www.facebook.com/">
              <img
                src={facebookLogo}
                alt=""
                className="h-12 transition-transform transform-gpu hover:scale-105"
              />
            </a>
            <a href="">
              <img
                src={githubLogo}
                alt=""
                className="h-12 transition-transform transform-gpu hover:scale-105"
              />
            </a>
            <a href="">
              <img
                src={linkedinLogo}
                alt=""
                className="h-12 transition-transform transform-gpu hover:scale-105"
              />
            </a>
          </div>
          <div className="bio text-justify text-[1.62rem] mt-7 text-[#102C57] font-body">
            <p>
              I'm a reliable worker with strong communication, time management,
              and computer skills, currently serving in the Ohio National Guard.
              As a detail-oriented individual, I'm eager to transition into
              Software Development, leveraging my analytical and problem-solving
              skills. Proficient in Java, HTML, CSS, and JavaScript, including
              hands-on experience with React, Tailwind, and SQL, I am confident
              in my ability to contribute effectively to your team.
            </p>
          </div>
        </div>
        <div className=" w-[650px] h-[500px] mt-[5%] ">
          <img
            src={pfp}
            alt=""
            className="  rounded-full h-full w-full p-5 object-contain "
          />
        </div>
      </div>
    </div>
  );
}
export default AboutMePage;
