import Image from 'next/image'
import React from 'react'

const ThreePoints = () => {
    const services = [
        {
          icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
          title: '18+ years of consulting expertise',
          description:
            'With valuable industry experience in business and technology consulting, we have the tools to take your organization to the next level. We analyze your business processes from every angle to adopt a personalized approach and recommend the best options.',
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
          title: 'Trusted IT advisor',
          description:
            'We will be your sounding board when it comes to technology. Let us help you optimize efficiency and accelerate workflows within your current systems while also exploring new ones.',
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/128/1848/1848755.png', // Replace with actual path to the icon
          title: 'Tailored Software Development',
          description:
            'Our team tackles important challenges every day to develop custom software that is personalized to our clients’ needs through a professional yet personable approach.',
        },
      ]
    
      return (
        <section className="py-12 pb-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  <div className="bg-blue-600 p-4 rounded-full mb-6">
                    <Image src={service.icon} alt={service.title} width={50} height={50} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    
}

export default ThreePoints