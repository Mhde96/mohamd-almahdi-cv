import { companiesData } from "../../data/companiesData";
import "./companies-styls.scss";

export const CompaniesSection = () => {
  return (
    <div id="companies-styls">
      <div className="h3 bold" style={{ marginBottom: 2 }}>
        Experience
      </div>
      <div className="brek-items-from-left">
        {companiesData.map((company, index) => (
          <div key={index}>
            <div className="title ">
              <div className="bold">{company.work}</div>

              <div className="location-type bold h5">
                {company.employmentType}
              </div>
              <div className="location-type bold h5  "> {company.type}</div>
              <div className="location  bold h5"> {company.location}</div>
              <div className="time ">
                <div className=" bold"> {company.time}</div>
              </div>
            </div>
            <div className="d-flex">
              <div className=" h5 company-name bold">{company.name} </div>

              <div className="bold h6">{company.industry} </div>

              <div className="test">
                <a
                  className="bold"
                  href={"//" + company.website}
                  target="_blank"
                >
                  {company.website}{" "}
                </a>
              </div>
            </div>

            <div className="responsibilities">
              {company.responsibilities?.map((item, index) => (
                <div className="h5" key={index}>
                  * {item}
                </div>
              ))}
            </div>
            {/* <br /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
