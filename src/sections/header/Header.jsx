import "./header-styles.scss";
import { my_info_content, portfolio } from "./info-content";
export const Contact = ({ path, value, link, bold, fullWidth }) => (
  <div className={"contact " + fullWidth }>
    <img className="icon" src={path} />

    <a href={link} target="_blank" rel="noreferrer" className={bold && "bold"}>
      {value}
    </a>
  </div>
);

export const Header = () => (
  <>
    <div className="header-styles">
      <img className="img" src="assets/test-modified.png" />

      <div className="profile">
        <div>Hellow, I am</div>
        <div className="my-name">MOHAMD ALMAHDI</div>

        <div className="my-carrer">SENIOR FRONT END DEVELOPER</div>
      </div>
    </div>
    <br />

    <div className="fly-background">
      {my_info_content.map((item) => (
        <Contact
          key={item.value}
          path={item.path}
          value={item.value}
          link={item.link}
        />
      ))}
    </div>
    {/* <hr/> */}
    {/* <Contact
      fullWidth="fullWidth"
      bold
      path={portfolio.path}
      value={portfolio.value}
      link={portfolio.link}
    /> */}
  </>
);
