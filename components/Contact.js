

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center text-white pt-14">
      <h1 className="text-4xl font-bold mb-4" style={{fontSize:'65px',font: 'Poppins'}}>Lets Design Together</h1>
      <p className="text-center text-white mb-8 pt-6" style={{ fontSize: '21px', font: 'Poppins',fontWeight:'400' }}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus<br/>
        netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="flex pt-8" style={{ fontSize: '21px', font: 'Poppins',fontWeight:'500' }}>
        <input
          type="email"
          placeholder="Enter Your Email"
          className="px-4 py-2 rounded-lg text-gray-900" style={{width:'627px',height:'75px'}}
        /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="px-6 py-2 bg-orange-500 rounded-lg hover:bg-orange-600" style={{width:'222px',height:'75px'}}>
          Contact Me
        </button>
      </div>
    </div>
  );
};


