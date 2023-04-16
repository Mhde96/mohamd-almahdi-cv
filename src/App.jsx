import { DigitalSkills } from "./sections/digital-skills/DigitalSkills";
import { Education } from "./sections/education/Education";
import { Header } from "./sections/header/Header";
import { Summary } from "./sections/summary/Summary";
import { useRef } from "react";
import { Courses } from "./sections/courses/Courses";
import { useReactToPrint } from "react-to-print";

import "./print.scss";
import { CompaniesSection } from "./sections/companies/CompaniesSection";
import { PortfolioSection } from "./sections/portfolio/PortfolioSection";
import { portfolio } from "./sections/header/info-content";
function App() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Mohamd Almahdi",

    // suppressErrors:false
  });

  return (
    <>
      <button onClick={() => handlePrint()}>Print</button>
      <div className="cv" ref={componentRef}>
        <Header />
        {/* <PortfolioSection /> */}
        <hr />
        <Summary />
        <DigitalSkills />
        <hr />
        <CompaniesSection />
        {/* <hr /> */}
        {/* <ProjectsScection /> */}
        {/* <hr /> */}
        {/* <Works /> */}
        <hr />
        <Education />
        {/* <hr /> */}
        {/* <Languages /> */}
        <hr />
        {/* <Courses />  */}

        {/* <hr/> */}
        
        <div className="end-contaienr">
          <a href={portfolio.link} target="_blank" className="end bold h4">
            <div>To Check My Projects Please Visit My Portfolio</div>
            {/* <div className="h5"> {portfolio.link}</div> */}
            <PortfolioSection />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
