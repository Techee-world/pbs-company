import Link from 'next/link'
import { FaCode, FaCloud, FaHome, FaLock, FaChartBar, FaDesktop, FaChartLine } from 'react-icons/fa'

export default function Home() {
  return (
    
    <div className="flex w-full flex-col md:flex-row  overflow-y-auto">
      
      {/* Left side - non-scrolling */}
      <div className="md:w-[30%] bg-gray-50 lg:h-screen lg:fixed top-0 left-0   p-8 flex flex-col justify-between">
        <div>
          <Link href='/'>
        <h1 className='pb-20 text-2xl cursor-pointer'>
          <FaHome/>
        </h1>
          </Link>
          <h1 className="text-5xl font-bold text-teal-500 mb-8 text-center">PBS Tech</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">IT Solutions</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">Shaping Technology Around You</p>
          <p className="text-gray-600 mb-8 text-center lg:mt-28 mt-0">
          We are committed to helping businesses thrive by providing innovative and
          personalized solutions. Our comprehensive approach ensures that you have
          access to the resources and expertise needed to succeed in today's
          competitive market.
        </p>
        </div>
        
      </div>

      {/* Right side - scrolling */}
      <div className="md:w-2/3 bg-white py-0 pb-16 lg:pb-0 lg:py-20 lg:ml-[32%]  overflow-y-auto w-full">
      
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <ServiceCard
            icon={<FaCode className="w-12 h-12 text-teal-500" />}
            title="Web/App Development"
            description="We create dynamic websites and mobile apps tailored to your business needs, ensuring a seamless user experience across all platforms"
          />
          <ServiceCard
            icon={<FaCloud className="w-12 h-12 text-teal-500" />}
            title="Cloud Services and Solutions"
            description="Our cloud solutions provide scalable infrastructure, optimized application performance, secure storage, and seamless integration to streamline your business operations"
          />
          <ServiceCard
            icon={<FaLock className="w-12 h-12 text-teal-500" />}
            title="Cybersecurity"
            description="Protect your digital assets with our comprehensive cybersecurity services, including application security, network protection, and 24/7 threat monitoring"
          />
          <ServiceCard
            icon={<FaChartBar className="w-12 h-12 text-teal-500" />}
            title="Data Engineering and Analytics"
            description="Unlock the full potential of your data with our analytics services, from data warehousing and business intelligence to advanced data governance and security"
          />
          <ServiceCard
            icon={<FaDesktop className="w-12 h-12 text-teal-500" />}
            title="IT Infrastructure Services"
            description="From IT management to equipment installation, we provide complete infrastructure solutions includes, Office Stationary, Network and intercom Systems, CCTV, Alarms that ensure smooth, secure, and efficient operations for businesses"
          />
          <ServiceCard
            icon={<FaChartLine className="w-12 h-12 text-teal-500" />}
            title="ERP Implementation"
            description="We implement leading ERP solutions like Odoo, Zoho, ERPNext, and NetSuite to streamline your operations. Our tailored systems integrate seamlessly, enhancing efficiency, automating workflows, and supporting your business growth"
          />
          <ServiceCard
            icon={<FaChartLine className="w-12 h-12 text-teal-500" />}
            title="IT Compliance Assurance"
            description="We help businesses meet industry security standards and regulatory frameworks, ensuring compliance with GDPR, HIPAA, and other critical requirements"
          />
          <ServiceCard
            icon={<FaChartLine className="w-12 h-12 text-teal-500" />}
            title="DevOps Services"
            description="Streamline your software development and operations processes with our DevOps services, including version control, automated software delivery, and system monitoring"
          />
          <ServiceCard
            icon={<FaChartLine className="w-12 h-12 text-teal-500" />}
            title="AI & Automation"
            description="We design intelligent AI and automation solutions tailored to your business needs, streamlining workflows, reducing manual tasks, and enhancing operational efficiency."
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
    <div className="bg-white p-4 rounded-lg ">
      <div className="flex justify-center items-center mb-4">
        {icon}
      </div>
        <h3 className="text-lg font-semibold text-center ">{title}</h3>
      <p className="text-gray-600 text-base text-center">{description}</p>
    </div>
  )
}