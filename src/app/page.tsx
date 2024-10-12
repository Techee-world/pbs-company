'use client'
// import Banner from "./component/Banner";
// import {useEffect} from 'react'
import HomeTraining from "./component/HomeTraining";
import HomeFunding from "./component/HomeFunding";
import HomeMeetRoom from "./component/HomeMeetRoom";
import HomeAbout from "./component/HomeAbout";
import Seo from "./seo/Seo";
import Image from "next/image";
// import mdBackground from '../../public/images/bca-bg-1.png'
import md from '../../public/images/ceo.jpg'
import SecondBanner from "./component/SecondBanner";
import ShortBriefBanner from "./component/ShortBriefBanner";
import ThreePoints from "./component/ThreePoints";
import SecondAbout from "./component/SecondAbout";
import SecondWhoNeedUs from "./component/SecodWhoNeedUs";
import FounderMassage from "./component/FounderMassage";
// import SmoothScroll from 'smooth-scroll';

export default function Home() {

  return (
    <div className="">
      <Seo
        title="home"
        description="pbs over all providing serivces"
        url="https://pbsgroup.in/about"
        image="/images/og-image-about.jpg"
      />
      {/* <Banner /> */}
      <div style={{backgroundImage:`url('https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/21-05-2024/landing-gradient.svg')`,
      backgroundRepeat: 'no-repeat',
     }} className=" ">

      <SecondBanner />
      <ShortBriefBanner />
      <SecondAbout />
      <ThreePoints />
      </div>

      <HomeAbout />
      <FounderMassage />


 {/* <SecondWhoNeedUs /> */}
      {/* <HomeTraining />
      <HomeFunding />
      <HomeMeetRoom /> */}
    </div>
  );
}
