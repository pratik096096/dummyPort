import Image from 'next/image';
import ProjectFilters from './ProjectFilters'
import ProjectCards from './ProjectCards'

export default function Myprojects() {
  return (
    <div id='projects' className="text-white py-12" style={{ backgroundColor: "#1E1E1E", paddingTop: '110px' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center "style={{ fontSize: '65px', font: 'Poppins' }}>My Projects</h2>
        <p className="text-center mt-12 text-white" style={{ fontSize: '21px', font: 'Poppins' }}>
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <br/>lectus. Phasellus consequat urna tellus.
        </p>
        <ProjectFilters />
        <ProjectCards />
      </div>
    </div>
  )
}
