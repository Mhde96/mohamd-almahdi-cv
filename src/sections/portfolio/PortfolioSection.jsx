import { Contact } from "../header/Header";
import { portfolio } from "../header/info-content";
import "./portfolio-styles.scss";
export const PortfolioSection = () => {
  return (
    <div>
      {/* <Contact
        fullWidth="fullWidth"
        bold
        path={portfolio.path}
        value={portfolio.value}
        link={portfolio.link}
      /> */}

      <a href={portfolio.link} target="_blank" className="portfolio-styles">
        <img src={portfolio.path} />
        <div>{portfolio.value}</div>
      </a>
    </div>
  );
};
