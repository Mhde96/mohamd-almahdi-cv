import { Contact } from "../header/Header";
import { portfolio } from "../header/info-content";
import "./summary-styles.scss";
export const Summary = () => (
  <div className="summary-styles">
    <div className="head">Summary</div>
    <div className="brek-items-from-left">
      <div className="content">
        I am a React/Three.js developer with experience in creating and
        supporting 3D viewer applications. I have a strong knowledge of
        JavaScript, WebGL, and animation. I am proficient in using
        react-three-fiber, I am also familiar with other tools and libraries
        such as Blender,, gltfjsx, I am passionate about creating immersive and
        interactive 3D experiences for the web
      </div>
      {/* <div className="content">
      React Js/Native Developer seeking changeable work to get more hands
      experience and check hands with expert .
    </div> */}
    </div>
  </div>
);
