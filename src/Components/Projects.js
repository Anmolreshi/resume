import React from "react";
import { Col, Container, Row, Card, Button, Image } from "react-bootstrap";
import project from "../images/projects.png";
import github from "../images/github.png";
class Project extends React.Component {
  render() {
    return (
      <Container>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Row>
          <Col lg={2} sm={2} xs={2}></Col>
          <Col>
            <div
              style={{
                marginTop: "10px",
                // marginLeft: "7vw",
                fontFamily: "Sans-serif",
                backgroundColor: "rgb(102, 0, 102)",
                borderRadius: "10px",
                width: "max-Content"
              }}
            >
              <h1
                style={{
                  textShadow: "4px 4px 4px grey",
                  fontSize: "6vw",
                  fontWeight: "bolder",
                  color: "white",
                  padding: "1vw"
                }}
              >
                PROJECTS{" "}
                <Image
                  style={{ height: "auto", width: "8vw" }}
                  alt="project"
                  src={project}
                  responsive
                />
              </h1>
            </div>
          </Col>
          <Col xl={2} sm={2} lg={2}></Col>
        </Row>
        <Container style={{ padding: "20px" }}>
          <Row style={{ marginTop: "10px" }}>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://www.flaticon.com/svg/vstatic/svg/1814/1814008.svg?token=exp=1619675550~hmac=11a4e0c0a47b34696c4bd3f29a48f6f0"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px"
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Demo
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "50%"
                          }}
                          alt="codesandbox"
                          src="https://pbs.twimg.com/profile_images/1171375829382774784/70ZgE-ke_400x400.png"
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://www.flaticon.com/svg/vstatic/svg/1814/1814008.svg?token=exp=1619675550~hmac=11a4e0c0a47b34696c4bd3f29a48f6f0"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px"
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Demo
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "50%"
                          }}
                          alt="codesandbox"
                          src="https://pbs.twimg.com/profile_images/1171375829382774784/70ZgE-ke_400x400.png"
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://www.flaticon.com/svg/vstatic/svg/1814/1814008.svg?token=exp=1619675550~hmac=11a4e0c0a47b34696c4bd3f29a48f6f0"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px"
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Demo
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "50%"
                          }}
                          alt="codesandbox"
                          src="https://pbs.twimg.com/profile_images/1171375829382774784/70ZgE-ke_400x400.png"
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://www.flaticon.com/svg/vstatic/svg/1814/1814008.svg?token=exp=1619675550~hmac=11a4e0c0a47b34696c4bd3f29a48f6f0"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px"
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Demo
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "50%"
                          }}
                          alt="codesandbox"
                          src="https://pbs.twimg.com/profile_images/1171375829382774784/70ZgE-ke_400x400.png"
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://www.flaticon.com/svg/vstatic/svg/1814/1814008.svg?token=exp=1619675550~hmac=11a4e0c0a47b34696c4bd3f29a48f6f0"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px"
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Demo
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "50%"
                          }}
                          alt="codesandbox"
                          src="https://pbs.twimg.com/profile_images/1171375829382774784/70ZgE-ke_400x400.png"
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xl={6} lg={6} sm={6}>
              <div>
                <Card style={boxcard}>
                  <Card.Img
                    style={{ height: "150px", padding: "10px" }}
                    variant="top"
                    src="https://www.flaticon.com/svg/vstatic/svg/1814/1814008.svg?token=exp=1619675550~hmac=11a4e0c0a47b34696c4bd3f29a48f6f0"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="warning">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Github
                        <img
                          style={{
                            borderRadius: "5px",
                            height: "25px",
                            marginLeft: "10px"
                          }}
                          alt="github"
                          src={github}
                        />
                      </a>
                    </Button>{" "}
                    &nbsp;
                    <Button variant="success">
                      <a
                        style={{ textDecoration: "none", color: "black" }}
                        href="https://github.com/"
                      >
                        Demo
                        <img
                          style={{
                            height: "25px",
                            marginLeft: "10px",
                            borderRadius: "50%"
                          }}
                          alt="codesandbox"
                          src="https://pbs.twimg.com/profile_images/1171375829382774784/70ZgE-ke_400x400.png"
                        />
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
const boxcard = {
  boxShadow: "2px 2px 3px"
};
export default Project;
