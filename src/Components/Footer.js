import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import instalogo from "../images/instalogo.png";
import linkedinlogo from "../images/linkedinogo.png";
import gmail from "../images/gmail.png";
import github from "../images/github.png";
import snapchat from "../images/snapchat.png";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container fluid style={footerstyle}>
          <Row>
            <Col style={{ padding: "30px" }} xl={12} lg={4} sm={12} xs={12}>
              <div
                style={{
                  fontSize: "30px",
                  padding: "30px",
                  border: "6px  double white"
                }}
              >
                𝓐𝓷𝓶𝓸𝓵 𝓡𝓮𝓼𝓱𝓲
              </div>
            </Col>
            <Col style={{ marginTop: "45px" }} xl={12} lg={4} sm={12} xs={12}>
              <div className="socialmediaicons">
                <ul className="listitems">
                  <li>
                    <a
                      href="https://www.instagram.com/iamanmolreshi_20/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={icon} alt="instagram" src={instalogo} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:anmolreshi@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={icon} alt="gmail" src={gmail} />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.snapchat.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={icon} alt="snapchat" src={snapchat} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/anmolreshi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={icon} alt="linkedin" src={linkedinlogo} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <hr style={{ width: "50%", backgroundColor: "red" }} />

          <Row>
            <Col>
              <p style={{ textAlign: "center" }}>
                {" "}
                &copy; Copyright,2021 Made by Anmol Reshi
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      // <Container style={footerstyle}>
      //   <Row>
      //     <div className="socialmediaicons">
      //       <ul className="listitems">
      //         <Col xl={2} lg={2} sm={2} md={2} xs={2}>
      //           <li>
      //             <a
      //               href="https://www.instagram.com/iamanmolreshi_20/"
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               <img style={icon} alt="instagram" src={instalogo} />
      //             </a>
      //           </li>
      //         </Col>
      //         <Col xl={2} lg={2} sm={2} md={2} xs={2}>
      //           <li>
      //             <a
      //               href="mailto:anmolreshi@gmail.com"
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               <img style={icon} alt="gmail" src={gmail} />
      //             </a>
      //           </li>
      //         </Col>
      //         <Col xl={2} lg={2} sm={2} md={2} xs={2}>
      //           <li>
      //             <a
      //               href="https://www.snapchat.com/"
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               <img style={icon} alt="snapchat" src={snapchat} />
      //             </a>
      //           </li>
      //         </Col>
      //         <Col xl={2} lg={2} sm={2} md={2} xs={2}>
      //           <li>
      //             <a
      //               href="https://github.com/Anmolreshi"
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               <img style={icon} alt="github" src={github} />
      //             </a>
      //           </li>
      //         </Col>
      //         <Col xl={2} lg={2} sm={3} md={2} xs={2}>
      //           <li>
      //             <a
      //               href="https://www.linkedin.com/in/anmolreshi/"
      //               target="_blank"
      //               rel="noopener noreferrer"
      //             >
      //               <img style={icon} alt="linkedin" src={linkedinlogo} />
      //             </a>
      //           </li>
      //         </Col>
      //       </ul>
      //     </div>
      //   </Row>
      //   <Row>
      //     <hr />
      //   </Row>
      //   <Row>
      //     <div>
      //       Made with{" "}
      //       <img
      //         className="loveicon"
      //         alt="heart"
      //         src="https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1619416389~hmac=42def72c704b594f6258ff40afc323a6"
      //       />
      //       &nbsp; by Anmol
      //     </div>
      //   </Row>
      // </Container>
    );
  }
}
const footerstyle = {
  height: "auto",
  width: "100%",
  backgroundColor: "black",
  textAlign: "center",
  color: "white"
};
const icon = {
  height: "auto",
  width: "35px",
  cursor: "pointer",
  borderRadius: "3px"
};

export default Footer;
