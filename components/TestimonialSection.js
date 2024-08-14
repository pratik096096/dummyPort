import TestimonialCard from './TestimonialCard';
import Pagination from './Pagination';

export default function TestimonialSection() {
  return (
    <section id='testimonials' className="text-white py-12 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 py-10" style={{ fontSize: '65px', font: 'Poppins' }}>Testimonials</h2>
        <p className="text-lg mb-8" style={{ fontSize: '21px', font: 'Poppins' }}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus<br/>
          netus in. Aliquet donec morbi convallis pretium.
        </p>
        
        <div className="flex justify-center items-center space-x-8 pt-12" style={{ height: '344px', maxWidth: '100%' }}>
          {/* Left Card with reduced opacity */}
          <div className="flex-1 opacity-50">
            <TestimonialCard />
          </div>
          
          {/* Center Main Card */}
          <div className="flex-1 opacity-100">
            <TestimonialCard />
          </div>
          
          {/* Right Card with reduced opacity */}
          <div className="flex-1 opacity-50">
            <TestimonialCard />
          </div>
        </div>

        <Pagination />
      </div>
    </section>
  );
}
