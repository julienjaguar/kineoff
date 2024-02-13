import { Col } from "react-bootstrap";
import "../index.css";

export const ProjectCard = ({ title, price, imgUrl, button, redirectUrl }) => {
  const redirectToUrl = () => {
    window.location.href = redirectUrl;
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{price}</span>
          <br />
          <button onClick={redirectToUrl} className="btnBuy">
            {button}
          </button>
        </div>
      </div>
    </Col>
  );
};
