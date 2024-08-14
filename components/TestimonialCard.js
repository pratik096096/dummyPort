import Image from 'next/image';
import pic from '../public/pic.png';

export default function TestimonialCard() {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 flex items-center" style={{ width: '1080px', height: '340px' }}>
      
      {/* Image Container */}
      <div className="w-40 h-40 flex-shrink-0 relative mr-6" style={{width:'235px',height:'235px'}}>
        <Image
          src={pic}
          alt="Person"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center text-left">
        <p className="text-2xl font-light mb-4" style={{ fontSize: '21px', font: 'Poppins',fontWeight:'400' }}>
          <span className="text-orange-500 text-3xl" >“</span>
          Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo &nbsp;&nbsp;urna velit neque mattis id tellus arcu condimentum.
          <span className="text-orange-500 text-3xl">”</span>
        </p>
        <h3  className='mx-3' style={{ fontSize: '24px', font: 'Poppins',fontWeight:'500' }}>Name</h3>
        <p className="text-gray-500 mx-3" style={{ fontSize: '19px', font: 'Poppins',fontWeight:'400' }}>CEO</p>
      </div>
    </div>
  );
}
