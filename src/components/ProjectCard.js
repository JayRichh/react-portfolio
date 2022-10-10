import { Col } from "react-bootstrap";
import { FaGithub, FaGlobe } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  repoUrl,
  liveUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={""} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-link">
            <div className="link">
              <a href={liveUrl} target="_blank" rel="noreferrer">
                <FaGlobe />
              </a>
              <span>Live</span>
            </div>
            <div className="link">
              <a href={repoUrl} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <span>Repo</span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
