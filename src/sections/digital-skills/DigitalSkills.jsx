import "./digital-skills-styles.scss";
import { info_digital } from "./info-digital";
// const array = [
//   "Git",
//   "Doker",
//   "Jira",
//   "Google Firbase",
//   "Google Maps",
//   "Windows",
//   "MacOs",
//   "Postman",
// ];
// const react = [
//   "React Hooks",
//   "Redux Tolkit Saga Thunk",
//   "React Router",
//   "Formik",
//   "reacti18n",
//   "Material Ui",
//   "React Bootstarap",
// ];

const native = ["React Navigation", "React Native Paper"];

const backend = ["Laravel", "MySQL"];
const language = ["JavaScript", "TypeScript", "PHP", "C#"];
export const DigitalSkills = () => (
  <div className="digital-skills-styles">
    <hr />

    {info_digital.map((item) => (
      <div>
        <h2>{item.name}</h2>
        <div className="tag-contaienr">
          {item.data.map((tag, index) => (
            <div className="tag">{tag} </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
