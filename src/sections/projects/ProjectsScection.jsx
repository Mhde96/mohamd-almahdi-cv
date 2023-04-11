import { projectsData } from "../../data/projectsData";

import "./projects-styles.scss";
export const ProjectsScection = () => {
  return (
    <div id="projects-styles">
      Projects
      {projectsData.map((project, index) => (
        <div>
          <div className="title">
            <div className="project-name">{project.name}</div>
            <div>/{project.technologiesUsed}</div>
          </div>
          <div>{project.description}</div>
          {project.features?.map((item, index) => (
            <div>{item}</div>
          ))}

          <div className="br" />
        </div>
      ))}
    </div>
  );
};
