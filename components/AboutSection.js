import Image from "next/image";
import aboutimage from "../public/aboutimage.png";

const AboutSection = () => {
  return (
    <div id="about"
      className=" text-white p-8 flex flex-col items-center"
      style={{ paddingTop: "100px" }}
    >
      <div className="flex flex-col items-center sm:flex-row ">
        <div className="flex flex-col items-center sm:flex-row">
          <div className="relative w-96 h-96 mx-auto" style={{width:'601px',height:'600px',paddingRight:'50px'}}>
            <div className="absolute inset-0 rounded-full bg-white border-4 border-orange-500"></div>{" "}
           
            <Image
              src={aboutimage}
              alt="About Me"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
             
            />
            <div className="absolute left-16 right-16 h-16 bg-orange-500 bg-opacity-50 mt-2 "></div>
            {/* <div className="absolute inset-0 bg-orange-600 opacity-50 rounded-full"></div> */}
          </div>
        </div>

        <div className="sm:ml-8 text-center sm:text-left" style={{paddingLeft:'90px'}}>
          <h2 className="text-3xl font-bold" style={{ fontSize: "65px", font: "Poppins" }}>About Me</h2>
          <p className="mt-2 text-gray-300" style={{ fontSize: "21px", font: "Poppins",paddingTop:'30px' }}>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra.
          </p>
          <div className="mt-4" style={{fontSize:'24px'}}>
            <SkillBar skill="UX" level="90%"/>
            <SkillBar skill="Website Design" level="80%" />
            <SkillBar skill="App Design" level="98%" />
            <SkillBar skill="Graphic Design" level="90%" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mt-2">
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>{level}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
        <div
          className="bg-orange-500 h-2.5 rounded-full"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
};

export default AboutSection;

