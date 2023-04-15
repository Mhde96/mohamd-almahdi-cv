import "./courses-styles.scss";
export const Courses = () => {
  const handleClickGlsl = () => window.open("https://simondev.teachable.com/");
  const handleThreeJs = () => window.open("https://threejs-journey.com/");
  const handleGsap = () =>
    window.open("https://www.creativecodingclub.com/courses/gsap-3-express");

  const data = {
    gsap: "https://www.creativecodingclub.com/courses/gsap-3-express",
    threejs: "https://threejs-journey.com/",
    glsl: "https://simondev.teachable.com/",
  };
  return (
    <div id="courses-styles">
      <div className="h3 bold">Courses</div>

      <div className="brek-items-from-left column">
        <a
          href={data.threejs}
          target="_blank"
          className="h5 cursor"
          onClick={handleThreeJs}
        >
          - three.js Journey by Bruno Simon
        </a>

        <a
          href={data.glsl}
          target="_blank"
          className="h5 cursor"
          onClick={handleClickGlsl}
        >
          - GLSL Shaders from Scratch by SimonDev
        </a>

        {/* <a
          href={data.gsap}
          target="_blank"
          className="h5 cursor"
          onClick={handleGsap}
        >
          - GSAP 3 EXPRESS by Carl Schooff
        </a> */}
      </div>
    </div>
  );
};
