import Banner from "./component/Banner";
import HomeTraining from "./component/HomeTraining";
import HomeFunding from "./component/HomeFunding";
import HomeMeetRoom from "./component/HomeMeetRoom";
import HomeAbout from "./component/HomeAbout";

export default function Home() {
  return (
    <div className=" background-image-home-page">
      <Banner />
      <HomeAbout />
      <div className="">
      <HomeTraining />
      <HomeFunding />
      <HomeMeetRoom />
      </div>
    </div>
  );
}
