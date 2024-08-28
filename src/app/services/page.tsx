import Training from "../component/services/Training";
import Funding from "../component/services/Funding";
import ServicesHome from "../component/services/ServicesHome";
// import Meeting from "../component/services/Meeting";
// import '../font.css'

export default function Services() {
  return (
      <div className="">
       <Training />
       <Funding />
       <ServicesHome />
       {/* <Meeting /> */}
      </div>
  );
}
