import React from 'react';

const OurServices = () => {
  return (
    <div className="bg-white">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Our Services Include</h1>
      </div>
      <div className="flex justify-center space-x-8 px-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-gray-200 p-4 transform transition duration-500 hover:scale-105">
          <img className="w-full" src="https://10web-site.ai/26/wp-content/uploads/sites/29/2024/07/service-1_startup_template_vyWxl54u.webp" alt="Illustration of various icons representing Freelancer services" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Freelancer Connect</div>
            <p className="text-gray-700 text-base">
              We specialize in Freelancer Connect, providing a platform that connects employers with highly skilled freelancers across various domains. Our platform allows freelancers to showcase their portfolios, skills, and experiences to browse and connect with potential employers for the perfect project. Our goal is to provide a seamless and efficient experience for both freelancers and employers.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-gray-200 p-4 transform transition duration-500 hover:scale-105">
          <img className="w-full" src="https://10web-site.ai/26/wp-content/uploads/sites/29/2024/07/service-4_vyWxl54u.webp" alt="Illustration of verification and matching processes" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Job Matching</div>
            <p className="text-gray-700 text-base">
              We specialize in Job Matching, providing an advanced algorithm that matches freelancers with jobs based on their skills and experience. Our platform ensures that employers find the perfect freelancer for their project, saving time and money. Our goal is to provide a seamless and efficient experience for both freelancers and employers.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-gray-200 p-4 transform transition duration-500 hover:scale-105">
          <img className="w-full" src="https://10web-site.ai/26/wp-content/uploads/sites/29/2024/07/service-3_vyWxl54u.webp" alt="Illustration symbolizing employer services and connectivity" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Employer Connect</div>
            <p className="text-gray-700 text-base">
              We specialize in Employer Connect, providing a platform that connects employers with talented freelancers across various domains. Our platform allows employers to post their project requirements and connect with qualified freelancers for the perfect fit. Our goal is to provide a seamless and efficient experience for both employers and freelancers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
