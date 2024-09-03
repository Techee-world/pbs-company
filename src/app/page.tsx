import Banner from "./component/Banner";
import HomeTraining from "./component/HomeTraining";
import HomeFunding from "./component/HomeFunding";
import HomeMeetRoom from "./component/HomeMeetRoom";
import HomeAbout from "./component/HomeAbout";
import Seo from "./seo/Seo";
import Image from "next/image";
import mdBackground from '../../public/images/bca-bg-1.png'
import md from '../../public/images/md.jpeg'

export default function Home() {
  return (
    <>
      <Seo
        title="home"
        description="pbs over all providing serivces"
        url="https://pbsgroup.in/about"
        image="/images/og-image-about.jpg"
      />
      <Banner />
      <HomeAbout />
      <div className="h-fit pb-6 lg:pb-0  lg:h-fit  lg:w-full "
        style={{
          backgroundImage: `url(${mdBackground.src})`,
        }}
      >
        <h3 className="text-center  text-white font-black helvetic-Head-font text-3xl lg:text-4xl pt-10">CEO</h3>
        <div className="2xl:max-w-7xl pb-8 max-w-6xl m-auto relativ  flex flex-col md:flex-row gap-6 pt-6 items-start  text-white  md:space-x-6 px-4">
          {/* <div
            className=" border-8 z-10 -rotate-[9deg] absolute sm:w-[25rem] w-[21rem]  lg:w-80 h-[60vh] lg:h-[60vh] top-28 lg:top-32 left-4 lg:left-5 border-white p-1 mb-4 md:mb-0"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {" "}
          </div> */}
          <Image
            src={md.src}
            alt="Sridhar Vembu"
            width={300}
            height={500}
            className="z-40 rounded-sm w-full border-[8px] border-white  md:w-80 lg:w-80 p-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="500"
          />
          {/* <RiDoubleQuotesL
            className="w-16 h-16 text-white lg:absolute  top-16 left-80"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700"
          /> */}
          <div
            className="max-w-4xl  "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <p className="text-lg md:text-lg lg:ml-6  leading-relaxed">
              I am thrilled to announce the launch of our new business
              consultancy, dedicated to empowering businesses and professionals
              to reach their full potential. In today s rapidly evolving
              landscape, success requires not only strategic insight but also
              the continuous development of essential skills. That s why we are
              not just a consultancy—we are your partner in growth.
              <br />
              Our services go beyond traditional consulting. We offer
              comprehensive training programs designed to enhance both soft
              skills and technical expertise, ensuring that your team is
              equipped to meet the challenges of tomorrow. Whether you re
              looking to sharpen your leadership capabilities, improve
              communication within your organization, or master the latest
              technologies, our tailored solutions are here to guide you every
              step of the way.
              <br />
              At the heart of our mission is a commitment to excellence and a
              deep understanding of the unique needs of each client. We believe
              that by investing in people, we create the foundation for lasting
              success. I invite you to explore how we can collaborate to drive
              your business forward and achieve remarkable results.
              <br />
              Thank you for your trust, and I look forward to embarking on this
              journey with you.
              <br />
              <br />
              Warm regards,
            </p>
            <p className="mt-4 text-right text-base md:text-lg font-bold text-white"  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="1000">
              - Habeebu Rahiman <br />
              <span className="text-sm md:text-base font-normal">MD - PBS</span>
            </p>
          </div>
        </div>
      </div>
      <HomeTraining />
      <HomeFunding />
      <HomeMeetRoom />
    </>
  );
}
