// components/ProfileSection.js

import Image from "next/image";
import SocialIcons from "./SocialIcons";
import tempphoto from "../public/tempphoto.png";

export default function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontSize: "24px", font: "Poppins" }}
        >
          Hi I am
        </h1>
        <h2
          className="text-5xl font-bold text-orange-500 mb-4"
          style={{ fontSize: "32px", font: "Poppins" }}
        >
          Muhammad Umair
        </h2>
        <h3
          className="text-6xl font-bold mb-6"
          style={{ fontSize: "100px", font: "Poppins" }}
        >
          UI & UX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Designer
        </h3>
        <p className="mb-6" style={{ fontSize: "21px", font: "Poppins" }}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          style={{ fontSize: "21px", font: "Poppins", padding: "10px 50px" }}
        >
          Hire Me
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 relative" style={{paddingLeft:'200px',paddingBottom:'30px'}}>
        <div className="relative w-96 h-96 mx-auto" style={{width:'490px',height:'490px'}}>
          <div className="absolute inset-0 bg-white rounded-full overflow-hidden">
            <Image
              src={tempphoto}
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute  left-14 right-16 h-16 bg-orange-500 bg-opacity-50 mt-12"></div>
          </div>
          <div className="absolute inset-0 border-4 border-orange-500 rounded-full"></div>
        </div>
        <SocialIcons />
      </div>
      
    </div>
  );
}
