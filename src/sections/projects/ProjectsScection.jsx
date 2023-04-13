import { projectsData } from "../../data/projectsData";

import "./projects-styles.scss";
export const ProjectsScection = () => {
  return (
    <div id="projects-styles">
      <div className="h2 bold project-title">Projects</div>
      {projectsData.map((project, index) => (
        <div>
          <a href={project.link} target="_blank" className="title">
            <div className=" h4 bold-2">{project.name} </div>
            <div className="h5 tec">/{project.technologiesUsed}</div>
          </a>
          <div className="h5">{project.description}</div>
          {project.features?.map((item, index) => (
            <div>{item}</div>
          ))}

          {/* <div className="br" /> */}
        </div>
      ))}
    </div>
  );
};
