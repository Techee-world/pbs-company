import Training from "../component/services/Training";
import Funding from "../component/services/Funding";
import ServicesHome from "../component/services/ServicesHome";
import Growth from "../component/services/Growth";
// import Meeting from "../component/services/Meeting";
// import '../font.css'

export default function Services() {
  return (
      <div className="">
       <Training />
       <Funding />
       {/* <div className="bg-white max-w-6xl m-auto h-px  "></div> */}
       <Growth/>
       <ServicesHome />
       {/* <Meeting /> */}
      </div>
  );
}
