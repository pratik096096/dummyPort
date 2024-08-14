import ProjectCard from './ProjectCard'
import project1 from '../public/project1.png'

export default function ProjectCards() {
  const projects = [
    {
      title: 'AirCalling Landing Page Design',
      category: 'Web Design',
      imageUrl: project1,
    },
    {
      title: 'Business Landing Page Design',
      category: 'Web Design',
      imageUrl: project1,
    },
    {
      title: 'Ecom Web Page Design',
      category: 'Web Design',
      imageUrl: project1,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-36 mt-12 pr-20" >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          category={project.category}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  )
}
