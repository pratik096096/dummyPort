import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import logoname from "../public/logoname.png";

const headList = {
  
  fontSize:'21px',
  font:'Poppins'
};

const downButton = {
  
  font:'Poppins',
  fontSize:'21px',
  radius : '5px'
}
  


export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={67} height={67} />
          <div className="text-2xl font-bold text-orange-500">
            <Link href="/">
              <div className=" flex items-center justify-center">
                <Image
                 style={{width : '190px', height:'40px',fontSize:'48px', paddingLeft:'10px'}}
                  src={logoname}
                  alt="Logo"
                
                />
              </div>
            </Link>
          </div>
        </div>
        <ul className="hidden md:flex space-x-6" style={headList}>
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-orange-500">
              About Me
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-orange-500">
              Services
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-orange-500">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:text-orange-500">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>
        </ul>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" style={downButton}>
          Download CV
        </button>
      </nav>
    </header>
  );
}
