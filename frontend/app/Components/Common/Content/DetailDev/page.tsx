
import Link from 'next/link';
import React from 'react';
const DEV =[
  {
    "id":1,
    "title": "Introduction to Programming",
    "description": "A comprehensive course ,on programming concepts and practical coding.",
    "imageUrl": "https://www.centre-europeen-formation.fr/wp-content/uploads/2023/03/slider-developpeur-web.jpeg",
    "price": 299,
    "category": "Dev",
    "rating": 5,
    "delivery": "Online"
  },
  {
    "id":2,
    "title": "Digital Art Mastery",
    "description": "Learn the techniques, and tools used by professional digital artists.",
    "imageUrl": "https://smdi.tn/images/services/1690968365.jpg",
    "price": 399,
    "category": "Dev",
    "rating": 4,
    "delivery": "Online"
  },
  {
    "id":3,
    "title": "Marketing Essentials",
    "description": "An in-depth course ,covering the fundamentals of modern marketing strategies.",
    "imageUrl": "https://smdi.tn/images/services/1690968365.jpg",
    "price": 199,
    "category": "Dev",
    "rating": 4,
    "delivery": "Online"
  },
  {
    "id":4,
    "title": "Advanced Data Science",
    "description": "Master data science ,techniques with this advanced course.",
    "imageUrl": "https://www.centre-europeen-formation.fr/wp-content/uploads/2023/03/slider-developpeur-web.jpeg",
    "price": 499,
    "category": "Dev",
    "rating": 5,
    "delivery": "In-Person"
  },
  {
    "id":5,
    "title": "Creative Writing Workshop",
    "description": "Enhance your creative writing, skills with guided workshops.",
    "imageUrl": "https://smdi.tn/images/services/1690968365.jpg",
    "price": 149,
    "category": "Dev",
    "rating": 3,
    "delivery": "Online"
  },
  {
    "id":6,
    "title": "SEO and Content Marketing",
    "description": "Learn the secrets of successful SEO, and content marketing.",
    "imageUrl": "https://www.centre-europeen-formation.fr/wp-content/uploads/2023/03/slider-developpeur-web.jpeg",
    "price": 249,
    "category": "Dev",
    "rating": 4,
    "delivery": "Online"
  }
]


const page: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {DEV.map((element) => (
        <div key={element.id} className="max-w-sm mx-4 bg-white border rounded shadow-sm mt-5 flex-shrink-0">
          <div className="relative">
            <img src={element.imageUrl} alt="Advertisement" className="w-full rounded-t"/>
            <div className="absolute top-4 left-4 text-white">
              <h2 className="text-xl font-bold">DEV</h2>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white">
              <span className="block w-3 h-3 bg-white rounded-full"></span>
              <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
              <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
            </div>
          </div>
          <div className="flex items-center p-4">
            <img src={element.imageUrl} alt="Tech Wise logo" className="w-10 h-10 rounded-full"/>
            <div className="ml-3 flex-1">
              <p className="text-sm font-semibold">Tech Wise</p>
              <p className="text-sm text-gray-600 truncate">{element.description.split(',')[0]}</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 pb-4">
            <p className="flex items-center text-yellow-500">
              <i className="fas fa-star"></i>
              <span className="ml-1 text-black font-bold">⭐{element.rating}</span>
            </p>
            <div className="flex items-center">
              <span className="bg-green-600 text-white rounded-full px-2 py-1 text-xs font-bold mr-2">TalentLinkr</span>
            </div>
            <span className="text-sm font-bold">À partir {element.price} $US</span>
          </div>
          <Link href={`/Components/Common/Content/DetailDev/Talent/${element.id}`}>
            <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full text-white flex justify-center items-center">More Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;

