// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Me</h2>
              <p>
                In a past life I was hands on, delving in to control panels for
                large industrial manufacturing facilities as an Industrial
                Electrician. After this I progressed to pricing, designing and
                implimenting these control and electrical systems. This taught
                me how to approach problems from every possible angle until a
                solution is made clear.
                <br></br>
                <br></br>
                Later I discovered The Odin Project, an open-source curriculum
                written by developers that teaches (almost) everything one needs
                to be a capable full-stack developer. Projects range from some
                pretty serious hand holding in the beginning to "Go on kid. Make
                Facebook. You'll figure it out." I've been hooked. Big time.
              </p>
              <h4>Skills</h4>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  {/* <img src={meter1} alt="" /> */}
                  <i className="devicon-css3-plain-wordmark colored"></i>
                  <i className="devicon-html5-plain-wordmark colored"></i>
                  <i className="devicon-javascript-plain colored"></i>
                  <h5>Languages</h5>
                </div>
                <div className="item">
                  {/* <img src={meter2} alt="" /> */}
                  <i className="devicon-jest-plain colored"></i>
                  <i className="devicon-react-original-wordmark colored"></i>
                  <i className="devicon-sass-original colored"></i>
                  <h5>Frameworks</h5>
                </div>
                <div className="item">
                  {/* <img src={meter3} alt="" /> */}
                  <i className="devicon-git-plain-wordmark colored"></i>
                  <i className="devicon-github-original-wordmark"></i>
                  <i className="devicon-webpack-plain colored"></i>
                  <i className="devicon-npm-original-wordmark colored"></i>
                  <i className="devicon-vscode-plain-wordmark colored"></i>
                  <i className="devicon-babel-plain colored"></i>
                  <h5>Dev Tools</h5>
                </div>
                <div className="item">
                  {/* <img src={meter1} alt="" /> */}
                  <i className="devicon-linux-plain"></i>
                  <i className="devicon-ubuntu-plain-wordmark colored"></i>
                  <i className="devicon-windows8-original colored"></i>
                  <i className="devicon-google-plain colored"></i>
                  <h5>Other</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
