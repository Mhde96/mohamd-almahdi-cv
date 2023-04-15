import { educationData } from "../../data/educationData";
import "./education-styles.scss";
export const Education = () => (
  <div className="education-styles">
    <div className="h3 bold">EDUCATION</div>
    {/* <div className="break" /> */}
    <div className="brek-items-from-left">
      {educationData.data.map((item) => (
        <div className="h5 test">
          <span>{item.certificate}</span>
          <span className="time bold">{item.time}</span>
          <span className="h5 specialty">{item.specialty}</span>

          <div className="collage">{item.collage} </div>
        </div>
      ))}

      <div className=" bold story">{educationData.story}</div>
    </div>
  </div>
);
