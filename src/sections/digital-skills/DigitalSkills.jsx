import "./digital-skills-styles.scss";
import { info_digital } from "./info-digital";
import classnames from "classnames";
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

export const DigitalSkills = () => (
  <div className="digital-skills-styles">
    <hr />
    <div className="h3 bold">Skills</div>
    {/* <div className="break" /> */}
    <div className="brek-items-from-left">
      {info_digital.map((item) => {
        return (
          <div className="tag-contaienr">
            {/* <div className="tag h5 bold">{item.name} </div> */}
            {item.data.map((tag, index) => {
              const classes = classnames(
                {
                  bold: tag?.bold,
                  // h5: true,
                  tag: true,
                  // h5:true
                },
                tag.fontSize
              );
              return <div className={classes}>{tag.name} </div>;
            })}
          </div>
        );
      })}
    </div>
  </div>
);
