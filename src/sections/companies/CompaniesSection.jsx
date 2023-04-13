import { companiesData } from "../../data/companiesData";
import "./companies-styls.scss";
export const CompaniesSection = () => {
  return (
    <div id="companies-styls">
      <div className="h2 bold" style={{marginBottom:2}}>Companies</div>
      {companiesData.map((item, index) => (
        <div key={index}>
          <div className="title">
            <div className="company-name">{item.name}</div>
            <div>/ {item.location}</div>
            <div>/ {item.work}</div>
            <div>/ {item.time}</div>
          
          </div>

          <div className="responsibilities">
            {item.responsibilities?.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          {/* <br /> */}
        </div>
      ))}
    </div>
  );
};
