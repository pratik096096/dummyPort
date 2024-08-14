import Image from 'next/image';
import serv1 from '../public/serv1.png';
import serv2 from '../public/serv2.png';
import servv3 from '../public/servv3.png';
import serv4 from '../public/serv4.png';

const ServicesSection = () => {
  return (
    <div id='services' className="text-white py-12" style={{ backgroundColor: "#1E1E1E", paddingTop: '110px' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ fontSize: '65px', font: 'Poppins' }}>Services</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto" style={{ fontSize: '21px', font: 'Poppins' }}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="UI/UX"
            description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            icon={serv1}
          />
          <ServiceCard
            title="Web Design"
            description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            icon={serv2}
          />
          <ServiceCard
            title="App Design"
            description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            icon={servv3}
          />
          <ServiceCard
            title="Graphic Design"
            description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            icon={serv4}
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg">
      <div className="flex justify-start mb-6">
        <Image src={icon} alt={title} width={80} height={80} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-left" style={{ fontSize: '36px', font: 'Poppins' }}>{title}</h3>
      <p className="text-gray-700 text-left" style={{ fontSize: '22px', font: 'Poppins' }}>{description}</p>
    </div>
  );
};

export default ServicesSection;
