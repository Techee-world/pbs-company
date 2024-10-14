import Link from 'next/link'
import { FaCode, FaCloud, FaHome, FaLock, FaChartBar, FaDesktop, FaChartLine } from 'react-icons/fa'

export default function Home() {
  return (
    
    <div className="flex  flex-col md:flex-row h-screen">
      <div className='pt-16'>

      </div>
      {/* Left side - non-scrolling */}
      <div className="md:w-1/3 bg-gray-100  p-8 flex flex-col justify-between">
        <div>
          <Link href='/'>
        <h1 className='pb-20 text-2xl cursor-pointer'>
          <FaHome/>
        </h1>
          </Link>
          <h1 className="text-5xl font-bold text-teal-500 mb-8">PBS Tech</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">IT Solutions</h2>
          <p className="text-xl text-gray-600 mb-8">Shaping Technology Around You</p>
          <p className="text-gray-600 mb-8">
          We are committed to helping businesses thrive by providing innovative and
          personalized solutions. Our comprehensive approach ensures that you have
          access to the resources and expertise needed to succeed in today's
          competitive market.
        </p>
        </div>
        
      </div>

      {/* Right side - scrolling */}
      <div className="md:w-2/3 bg-white p-8 overflow-y-auto">
      
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<FaCode className="w-12 h-12 text-teal-500" />}
            title="Web/App Development"
            description="We create dynamic websites and mobile apps tailored to your business needs, ensuring a seamless user experience across all platforms."
          />
          <ServiceCard
            icon={<FaCloud className="w-12 h-12 text-teal-500" />}
            title="Cloud Services and Solutions"
            description="Our cloud solutions provide scalable infrastructure, optimized application performance, secure storage, and seamless integration to streamline your business operations."
          />
          <ServiceCard
            icon={<FaLock className="w-12 h-12 text-teal-500" />}
            title="Cybersecurity"
            description="Protect your digital assets with our comprehensive cybersecurity services, including application security, network protection, and 24/7 threat monitoring."
          />
          <ServiceCard
            icon={<FaChartBar className="w-12 h-12 text-teal-500" />}
            title="Data Engineering and Analytics"
            description="Unlock the full potential of your data with our analytics services, from data warehousing and business intelligence to advanced data visualization and reporting."
          />
          <ServiceCard
            icon={<FaDesktop className="w-12 h-12 text-teal-500" />}
            title="IT Infrastructure Services"
            description="From IT management to equipment installation, we provide complete infrastructure solutions including Office Stationary, Network and Intercom Systems, CCTV, Alarms that ensure smooth, secure, and efficient operations."
          />
          <ServiceCard
            icon={<FaChartLine className="w-12 h-12 text-teal-500" />}
            title="ERP Implementation"
            description="We implement leading ERP solutions like Odoo, Zoho, ERPNext, and NetSuite to streamline your operations. Our tailored systems integrate seamlessly, enhancing efficiency, automating workflows, and providing real-time insights for informed decision-making."
          />
        </div>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg ">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}