import React from "react";
import { Container, Row, Button, Image, Col } from "react-bootstrap";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import MyVerticallyCenteredModal from "./Modal";
function Contact() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Container>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Row>
          <Col xl={3} lg={3} sm={3} xs={1}></Col>
          <Col>
            <div
              style={{
                marginTop: "10px",
                // marginLeft: "20vw",
                fontFamily: "Sans-serif",
                backgroundColor: "rgb(102, 0, 102)",
                borderRadius: "10px",
                width: "max-Content"
              }}
            >
              <h1
                style={{
                  textShadow: "4px 4px 4px grey",
                  fontSize: "5vw",
                  fontWeight: "bolder",
                  color: "white",
                  padding: "1vw"
                }}
              >
                Get In Touch{" "}
                <Image
                  style={{ height: "auto", width: "5vw" }}
                  alt="Workexperince"
                  src="https://www.flaticon.com/svg/vstatic/svg/1033/1033949.svg?token=exp=1619702660~hmac=dd13ff73058f94395f17200e90526578"
                  responsive
                />
              </h1>
            </div>
          </Col>
          <Col xl={3} lg={3} sm={3} xs={1}></Col>
        </Row>

        <div style={{ padding: "15px" }}>
          <Container style={outside}>
            <div>
              <div
                style={{
                  backgroundColor: "red",
                  width: "max-content",
                  marginLeft: "30%",
                  paddingRight: "10px",
                  paddingLeft: "10px"
                }}
              >
                <p
                  style={{
                    fontSize: "35px",
                    fontWeight: "bolder",
                    textAlign: "center",
                    color: "white"
                  }}
                >
                  Want to Hire Me ?
                </p>
              </div>
            </div>
            <Row>
              <Col xl={6} lg={6} sm={6} xs={6}>
                <img
                  style={{ height: "auto", width: "35vw" }}
                  alt="group"
                  src="https://www.flaticon.com/svg/vstatic/svg/476/476761.svg?token=exp=1619703850~hmac=d0ee12337133928ab3c479226eecb9d4"
                />
              </Col>
              <Col style={{ paddingTop: "8vw" }} xl={6} lg={6} sm={6} xs={6}>
                <Row style={{ marginTop: "-6vw" }}>
                  <>
                    I would love to Connect with you regarding Hackathons,
                    Internship Oppurtunties ,lorem ispum , lorem ipsum, lorem
                    ipsum loree jiff djdjd djdd jdjd. many oppturnties are in a
                    nn sddjdfn jfnf fj ff fnjf nf f fj fjfn fj frnrnrnr nnrff
                    false
                    <br />
                    <div style={{ padding: "25px" }}>
                      <Button
                        size="lg"
                        style={{ fontSize: "25px", marginLeft: "-20px" }}
                        variant="success"
                        onClick={() => setModalShow(true)}
                      >
                        Contact Me
                      </Button>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  </>
                </Row>
                <h5>
                  <b>Social Media :</b>
                </h5>
                <Row>
                  <a href="">
                    <img
                      style={{
                        height: "auto",
                        width: "50px",
                        margin: "5px",
                        borderRadius: "15%"
                      }}
                      alt="linkedin"
                      src={github}
                    />
                  </a>
                  <a href="">
                    <img
                      style={{
                        height: "auto",
                        width: "50px",
                        margin: "5px",
                        borderRadius: "15%"
                      }}
                      alt="instagram"
                      src={instagram}
                    />
                  </a>
                  <a href="">
                    <img
                      style={{
                        height: "auto",
                        width: "50px",
                        margin: "5px",
                        borderRadius: "15%"
                      }}
                      alt="linkedin"
                      src={linkedin}
                    />
                  </a>
                  <a href="">
                    <img
                      style={{
                        height: "auto",
                        width: "50px",
                        margin: "5px",
                        borderRadius: "15%"
                      }}
                      alt="twitter"
                      src={twitter}
                    />
                  </a>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}
const outside = {
  backgroundColor: "white",
  boxShadow: "5px 5px 4px ",
  height: "fit-Content"
};
export default Contact;
