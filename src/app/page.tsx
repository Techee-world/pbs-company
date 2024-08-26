import Banner from "./component/Banner";
import HomeTraining from "./component/HomeTraining";
import HomeFunding from "./component/HomeFunding";
import HomeMeetRoom from "./component/HomeMeetRoom";
import HomeAbout from "./component/HomeAbout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Business Name | Home</title>
        <meta name="description" content="Brief description of your business." />
        <meta name="keywords" content="business, services, leaders, contact, etc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
    <div className=" background-image-home-page">
      <Banner />
      <HomeAbout />
      <div className="">
      <HomeTraining />
      <HomeFunding />
      <HomeMeetRoom />
      </div>
    </div>
    </>
  );
}
