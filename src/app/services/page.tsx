import Training from "../component/services/Training";
import Funding from "../component/services/Funding";
import ServicesHome from "../component/services/ServicesHome";
import Growth from "../component/services/Growth";
import ItService from "../component/services/ItService";
import Corporate from "../component/services/Corporate";
import CardInService from "../component/services/CardInService";
// import Meeting from "../component/services/Meeting";
// import '../font.css'

export default function Services() {
  return (
      <div className="pt-24 lg:pt-0">
        <CardInService />
        <div className="space-y-10">
        <Corporate />
       <Growth/>
       <ItService />
       <Training />
        </div>
       <Funding />
       {/* <div className="bg-white max-w-6xl m-auto h-px  "></div> */}
       <ServicesHome />
       {/* <Meeting /> */}
      </div>
  );
}
