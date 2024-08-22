import { Fragment } from "react";
import Banner from "./component/Banner";
import HomeTraining from "./component/HomeTraining";
import HomeFunding from "./component/HomeFunding";
import HomeMeetRoom from "./component/HomeMeetRoom";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-50  to-white">
      <Banner />
      <HomeTraining />
      <HomeFunding />
      <HomeMeetRoom />
    </div>
  );
}
