import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile-picture.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
// eslint-disable-next-line
import { HashLink } from "react-router-hash-link";
import Wave from "react-wavify";
import spaceKiwi from "../assets/img/space-kiwi.png";
import Resume from "./Resume";
import BackgroundCircles from "./utils/BackgroundCircles";
import Planet from "../assets/img/planet.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);

  const toRotate = [
    "Web Developer",
    "Engineering Professional",
    "Web Designer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      // console.log(delta)
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <img
                    src={spaceKiwi}
                    alt="space kiwi"
                    className="space-kiwi"
                  ></img>
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>
                    {`Hi! I'm Jayden.`} <br></br>
                    <span
                      className="txt-rotate"
                      data-rotate='[ "Web Developer.", "Engineering Professional.", "Web Designer." ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Kiwi based in the UK, passionate about all things web
                    development.
                  </p>
                  <a id="connect_href" href="#connect">
                    <button onClick={() => console.log("connect")}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                  <Resume />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} id="image-container">
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn relative"
                      : "relative"
                  }
                  id="image-div"
                >
                  <BackgroundCircles />
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="profile-pic"
                  />
                  <img src={Planet} alt="Planet" className="planet" />
                  <BackgroundCircles />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Wave
        id="movingWave1"
        fill="#121212"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
    </section>
  );
};
