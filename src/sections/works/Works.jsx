import "./works-styles.scss";
import companies from "./work-data.json";

export const Works = () => (
  <div className="works-styles">
    <div className="h1">WORK EXPERIENCE</div>
    <br />
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      {companies.map((company) => (
        <div style={{ paddingBottom: 8 }}>
          <div className="h2 company-name ">{company?.name}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {company?.data?.map((item) => (
              <div>
                <div key={item?.name} className="h4">
                  <div
                    onClick={() => window.open(item.link)}
                    className="company"
                  >
                    <img
                      src="assets/icons/circle.svg"
                      style={{
                        width: 5,
                        height: 5,
                        paddingRight: 4,
                        paddingLeft: 12,
                      }}
                    />
                    <div className="link"> {item.name} </div>{" "}
                    {item?.description}
                  </div>
                </div>
                {item?.features?.map((feature) => (
                  <div>
                    <img
                      src="assets/icons/star.svg"
                      style={{
                        width: 7,
                        height: 7,
                        paddingRight: 8,
                        paddingLeft: 18,
                      }}
                    />
                    {feature}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
