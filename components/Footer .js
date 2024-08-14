import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-8 mt-28">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <img src="/logo.png" alt="Logo" style={{width:'67px',height:'67px'}}/>
          <span className="text-2x1  ml-2 px-4" style={{fontSize:'48px',font:'Montserrat'}}><strong>M</strong>umair</span>
        </div>
        <ul className="flex justify-center space-x-6 mb-8 pt-6" style={{fontSize:'21px',font:'Poppins'}}>
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About Me</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#" className="hover:text-gray-400">Testimonials</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
        <div className="flex justify-center space-x-6 mb-4 pt-8" style={{fontSize:'24px'}}>
          <a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a>
          <a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-gray-400"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-gray-400"><FaLinkedinIn /></a>
        </div>
        <p className="text-gray-400 pt-6" style={{fontSize:'21px'}}>&copy; 2023 <span className="text-orange-500">Mumair</span> All Rights Reserved, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
