import { DigitalSkills } from "./sections/digital-skills/DigitalSkills";
import { Education } from "./sections/education/Education";
import { Header } from "./sections/header/Header";
import { Languages } from "./sections/languages/Languges";
import { Summary } from "./sections/summary/Summary";
import { Works } from "./sections/works/Works";
import { useRef } from "react";
import { Courses } from "./sections/courses/Courses";
import { useReactToPrint } from "react-to-print";

import "./print.scss";
import { CompaniesSection } from "./sections/companies/CompaniesSection";
import { ProjectsScection } from "./sections/projects/ProjectsScection";
function App() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Mohamd Almahdi 00971522215489",
  });

  return (
    <div className="cv" ref={componentRef} onClick={() => handlePrint()}>
      <Header />
      <hr />
      <Summary />
      <DigitalSkills />
      <hr />
      <CompaniesSection />
      <hr />
      <ProjectsScection />
      <hr />
      <Works />
      <hr />
      <Education />
      <hr />
      <Languages />
      <hr />
      <Courses />
    </div>
  );
}

export default App;
