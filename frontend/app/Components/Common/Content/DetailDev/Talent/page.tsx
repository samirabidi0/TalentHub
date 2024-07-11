import React from 'react'

const page = () => {
  return (

<div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
                <img src="https://placehold.co/60x60" alt="AnchorTech Logo" className="w-12 h-12 mr-4"/>
                <div>
                    <h1 className="text-xl font-bold">Je vais créer un site Web WordPress, un site Web WordPress personnalisé, le développement de sites Web d'entreprise</h1>
                    <div className="flex items-center mt-2">
                        <img src="https://placehold.co/50x50" alt="Profile picture of Monjurul Islam" className="w-12 h-12 rounded-full mr-2"/>
                        <div>
                            <p className="text-lg font-medium">
                                Monjurul Islam <span className="text-gray-500">| Level 2</span>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <span className="text-gray-500">(1k+)</span>
                            </p>
                            <p className="text-sm text-gray-500"><i className="fas fa-language"></i> commandé 1 fois</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <p className="text-sm text-gray-500">
                    Certaines informations ont été traduites automatiquement.
                    <a href="#" className="text-blue-500">Afficher la version anglaise</a>
                </p>
            </div>
            <div className="w-full">
                <img src="https://placehold.co/1000x500" alt="Promotional banner with woman in orange sweater promoting WordPress website design and development services, ORDER NOW button" className="w-full h-auto rounded-lg shadow-lg"/>
            </div>
        </div>
    </div>
    <div className="w-full lg:w-1/2 px-4">
        <div className="w-full bg-white shadow-lg rounded-lg">
            <div className="flex border-b">
                <div className="py-2 px-4 text-center cursor-pointer border-b-2 border-black font-bold flex-1">Basique</div>
                <div className="py-2 px-4 text-center cursor-pointer flex-1">Standard</div>
                <div className="py-2 px-4 text-center cursor-pointer flex-1">Premium</div>
            </div>
            <div className="p-6">
                <h2 className="font-bold text-xl mb-1">Conception/refonte de la page de destination</h2>
                <p className="text-lg mb-4"><span className="font-bold">90 $US</span></p>
                <p className="text-gray-600 mb-4">Je vais concevoir/reconcevoir la page d'accueil/une page d'un site Web réactif de base.</p>
                <ul className="mb-4 space-y-2 text-gray-600">
                    <li className="flex items-center"><i className="fas fa-truck mr-2"></i> Livraison en 3 jour(s)</li>
                    <li className="flex items-center"><i className="fas fa-sync-alt mr-2"></i> Révisions illimitées</li>
                </ul>
                <p className="text-gray-600 mb-6">Ce qui est inclus</p>
                <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center"><span className="mr-2">Continuer</span><i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="border-t p-4 text-center">
                <button className="text-black underline">Comparer les offres</button>
            </div>
        </div>

        <div className="mt-4 flex items-center justify-center w-full max-w-sm">
            <button className="bg-white w-full border rounded-lg py-2 px-4 flex items-center justify-between">
                <span className="font-bold">Contactez-moi</span>
                <i className="fas fa-chevron-down"></i>
            </button>
        </div>
    </div>
</div>



  )
}

export default page
