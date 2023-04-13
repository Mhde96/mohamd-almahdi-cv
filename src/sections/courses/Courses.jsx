export const Courses = () => {
  const handleClickGlsl = () => window.open("https://simondev.teachable.com/");
  const handleThreeJs = () => window.open("https://threejs-journey.com/");
  const handleGsap = () =>
    window.open("https://www.creativecodingclub.com/courses/gsap-3-express");
  return (
    <div>
      <div className="h3 bold">Courses</div>

      <div className="brek-items-from-left">
        <div className="h5 cursor" onClick={handleThreeJs}>
          - three.js Journey
        </div>

        {/* <div className="h4 cursor" onClick={handleThreeJs}>
          - i did it one with vanilla JavaScript and another time with React
          Three Fiber
        </div> */}

        <div className="h5 cursor" onClick={handleGsap}>
          - GSAP 3 EXPRESS
        </div>

        <div className="h5 cursor" onClick={handleClickGlsl}>
          - SimonDev GLSL Shaders from Scratch
        </div>
      </div>
    </div>
  );
};
