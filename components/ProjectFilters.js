import Image from 'next/image';
export default function ProjectFilters() {
    return (
      <div className="flex justify-center space-x-4 my-14 " style={{ fontSize: '24px', font: 'Poppins' }}>
        {['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'].map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${
              filter === 'Web Design' ? 'bg-orange-500 text-white' : 'bg-white text-black'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    )
  }
  