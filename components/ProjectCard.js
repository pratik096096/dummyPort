import Image from 'next/image'

export default function ProjectCard({ title, category, imageUrl }) {
  return (
    <div className="relative flex flex-col" style={{ width: '450px' }}>
      
      <div className="rounded-lg shadow-lg overflow-hidden p-4" style={{ width: '100%', height: '490px', backgroundColor: '#FFEBDB' }}>
        <div className="relative" style={{ paddingTop: '150px', height: '450px' }}>
          <div className="absolute inset-0 transform translate-x-2 translate-y-2 rounded-lg z-0"></div>
          <Image
            src={imageUrl}
            alt={title}
            className="relative z-10 object-cover rounded-lg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      
      <div className="mt-8 text-left"> 
        <p className="text-orange-500 text-sm font-semibold" style={{ fontSize: '19px', font: 'Poppins' }}>{category}</p>
        <h3 className="text-lg font-bold text-white mt-2" style={{ fontSize: '24px', font: 'Poppins' }}>{title}</h3>
      </div>
    </div>
  )
}
