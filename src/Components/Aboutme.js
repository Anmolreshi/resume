import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../images/myimage.png";
import hire from "../images/hire.png";

class About extends React.Component {
  render() {
    return (
      <Container className="outerbox">
        <Row className="boxabout">
          <Col className="box-myimage" xl={4} lg={5} md={2} sm={2} xs={12}>
            <img style={myimage} alt="myimagepic" src={image} />
          </Col>
          <Col xl={8} lg={7} sm={12} md={12} xs={12}>
            <p style={mytext}>
              <h1 id="name">ANMOL RESHI</h1>
              <h2 class="line-1 anim-typewriter">Aspiring Web Developer</h2>
              <br />
              This is <span className="bold">Anmol Reshi</span>, an 2nd Year
              Engineering Student at University Institute of Engineering and
              Technology (UIET), Punjab University Chandigarh. I love{" "}
              <span role="img" aria-label="hey">
                ⚡
              </span>{" "}
              Hey! I am Amen Tyagi, a UX Designer with 2.5 years of experience
              in the design industry. In past 2.5 years, I've learnt and gained
              a lot of experience from freelancing to running my design-based
              businesses online and from working full-time jobs to mentoring &
              consulting young startups and even teach UX Design fundamental to
              students across various communities. I am a people's person and I
              love sharing experiences and learning from people. I believe one
              of my favourite quotes describe it very well, "There are no
              strangers in this world, Only friends that I haven't met yet". I
              always maintain good relations with my folks, and that is why I
              can say, My friends, acquaintances and my network are one of
              biggest strengths as a person. Right now I am looking for
              opportunities to move to a completely new place anywhere in the
              world and begin a new adventure, make more friends and grow
              further as a person.. And in case you were wondering, I am more of
              a dog person, my favourite food are Pizza and Gol-Gappe and I am 6
              feet tall. Keep your kindness alive. Cheers. Amen Tyagi.
            </p>
          </Col>
        </Row>
        <Row>
          <Card className="text-center" style={hiremebox}>
            <Card.Body>
              <Card.Title className="fonthire">Want to Hire me ?</Card.Title>
              <img alt="hirelogo" style={hirelogo} src={hire} />
              <Button className="btnhire" variant="primary">
                Cick Here
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
const hirelogo = {
  height: "auto",
  width: "100px"
};
const hiremebox = {
  width: "100%",
  backgroundColor: "red",
  color: "white",
  boxShadow: " 3px 3px 4px 3px black"
};
const myimage = {
  height: "auto",
  width: "270px",
  marginTop: "25%",
  marginLeft: "9%",
  padding: "6px",
  borderRadius: "50%",
  boxShadow: "4px 7px 10px black"
};
const mytext = {
  fontSize: "20px",
  padding: "13px",
  textAlign: "justify",
  textJustify: "inter-word"
};
export default About;
