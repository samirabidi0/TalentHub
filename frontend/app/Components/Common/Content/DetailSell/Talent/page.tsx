import React from 'react'

const page: React.FC  = () => {
  return (

<div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
                
                <div>
                    <h1 className="text-xl font-bold">Marketing</h1>
                    <div className="flex items-center mt-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="Profile picture of Monjurul Islam" className="w-12 h-12 rounded-full mr-2"/>
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
                <img src="https://www.questionpro.com/blog/wp-content/uploads/2022/11/Faby-BLOG-COVERS-2.png" alt="Promotional banner with woman in orange sweater promoting WordPress website design and development services, ORDER NOW button" className="w-full h-auto rounded-lg shadow-lg"/>
            </div>
        </div>
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
                    <li className="flex items-center"><i className="fas fa-truck mr-2"></i> Livraison en 3 jour(s)</li>
                    
                </ul>
                
                <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <label  className="sr-only">Your comment</label>
  <textarea id="comment" 
    className="w-full text-sm text-gray-900 bg-white border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
    placeholder="Write a comment..." required></textarea>
</div>
                <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center"><span className="mr-2">Continuer</span><i className="fas fa-arrow-right"></i></button>
            </div>
            
        </div>
    </div>
</div>



  )
}

export default page
