import React from 'react'
import { useRouter } from 'next/router';
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
      "imageUrl": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg",
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
      "imageUrl": "https://www.centre-europeen-formation.fr/wp-content/uploads/2023/03/slider-developpeur-web.jpeg",
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

const page: React.FC  = () => {
    const router = useRouter();
    const { id } = router.query;
    const card = DEV.find(item => item.id === parseInt(id as string));
    if (!card) {
      return <p>Card not found</p>;
    }
  
  return (

<div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
                
                <div>
                    <h1 className="text-xl font-bold">{card.title}</h1>
                    <div className="flex items-center mt-2">
                        <img src={card.imageUrl} alt="Profile picture of Monjurul Islam" className="w-12 h-12 rounded-full mr-2"/>
                        <div>
                            <p className="text-lg font-medium">
                               Samir Abidi <span className="text-gray-500">| Level 2</span>
                               
                                <span className="text-gray-500">(1k+)</span>
                            </p>
                            <p className="text-sm text-gray-500"><i className="fas fa-language"></i> commandé 1 fois</p>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="w-full">
                <img src={card.imageUrl} alt="Promotional banner with woman in orange sweater promoting WordPress website design and development services, ORDER NOW button" className="w-full h-auto rounded-lg shadow-lg"/>
            </div>
        </div>
        <h1>About this service:</h1>
        <p>{card.description}</p>
    </div>
    <div className="w-full lg:w-1/2 px-4">
        <div className="w-full bg-white shadow-lg rounded-lg">
            <div className="flex border-b">
                
                <div className="py-2 px-4 text-center cursor-pointer flex-1">Standard</div>
                
            </div>
            <div className="p-6">
                <h2 className="font-bold text-xl mb-1">Conception/refonte de la page de destination</h2>
                <p className="text-lg mb-4"><span className="font-bold">90 $US</span></p>
                <p className="text-gray-600 mb-4">Je vais concevoir/reconcevoir la page d'accueil/une page d'un site Web réactif de base.</p>
                <ul className="mb-4 space-y-2 text-gray-600">
                    <li className="flex items-center"><i className="fas fa-truck mr-2"></i> {card.delivery}</li>
                  
                </ul>
                <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <label  className="sr-only">Your comment</label>
  <textarea id="comment" 
    className="w-full text-sm text-gray-900 bg-white border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
    placeholder="Write a comment..." required></textarea>
</div>
                
                <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center"><span className="mr-2">Apply</span><i className="fas fa-arrow-right"></i></button>
            </div>
            
        </div>
    </div>
</div>



  )
}

export default page
