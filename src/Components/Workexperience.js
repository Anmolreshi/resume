import React from "react";
import "../styles.css";
import sudanstech from "../images/sudans.png";
import student from "../images/student.png";
import { Col, Container, Row, Image } from "react-bootstrap";
class WorkExperiences extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {/* <div className="t">
            <h1 style={heading}>
            Expereince
            <img
            style={imagework}
            alt="work"
            src="https://www.flaticon.com/svg/vstatic/svg/1063/1063196.svg?token=exp=1619603866~hmac=4b9273eec67fe2d29c39d9a985cb92f4"/>
            </h1>
        </div> */}
          {/* <img
              style={work}
              alt="work"
              src="https://www.changeboard.com/images/7429/default/work-experience.jpg"
            /> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Row>
            <Col xl={1} lg={1} sm={1} xs={1}></Col>
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
                    fontSize: "5vw",
                    fontWeight: "bolder",
                    color: "white",
                    padding: "1vw"
                  }}
                >
                  Work Experience{" "}
                  <Image
                    style={{ height: "auto", width: "10vw" }}
                    alt="Workexperince"
                    src={student}
                    responsive
                  />
                </h1>
              </div>
            </Col>
            <Col xl={1} lg={1} sm={1} xs={1}></Col>
          </Row>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}>
                  <img
                    style={companylogo}
                    alt="logo"
                    src="https://media-exp1.licdn.com/dms/image/C560BAQGqYuNSzyLC7A/company-logo_200_200/0/1598875669653?e=2159024400&v=beta&t=rkNWVyMudYugZTXcSGcNOnhWGUlGeHdtlpysE5fJw_4"
                  />
                </Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "4vh", fontWeight: "bold" }}>
                    {" "}
                    Organising Team{" "}
                  </Row>
                  <Row style={{ fontSize: "3vh" }}>
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href="https://hackthemountain.tech/season2/#team"
                    >
                      Hack The Mountains
                    </a>
                  </Row>
                  <Row>(Aug 2020 - Present)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Organizing a 36 hour Virtual Hackathon which is held on 26-27th
                June ,2021 and is to be held at global level . By partnered with
                MLH (Major Hacking League ) , It will be held On International
                Level . I contributed in Community section of Team , All content
                and making part in some descion was handled by myself.
              </Row>
            </Container>
          </div>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}>
                  <img style={companylogo} alt="logo" src={sudanstech} />
                </Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Core Team Member
                  </Row>
                  <Row style={{ fontSize: "20px" }}>Sudans Tech</Row>
                  <Row>(April 2019 - Pesent)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Working with Core Team of Sudans Tech as Senior Content Writer .
                Providing SEO Optimized and user friendly Content , Blogs ,
                articles and poster Content as well. Also Involved in various
                Plans for betterment of Company as well as working for serving
                the community at greater Scale .
              </Row>
            </Container>
          </div>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}>
                  <img
                    style={companylogo}
                    alt="logo"
                    src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1500550935/qigpiu6kicm4phqbi2il.png"
                  />
                </Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Software Developer
                  </Row>
                  <Row style={{ fontSize: "20px" }}>Linkedin</Row>
                  <Row>(Aug 2019 -2020)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Role description i worked as this and that and then this and
                then xyz lorem ispusm lorem ispusm lorem ispusm lorem ispusm
                lorem ispusm lorem ispusm lorem ispusmlorem ispusm lorem ispusm
                lorem ispusm lorem lorem ispusm lorem ispusm lorem lorem ispusm
                lorem ispusm lorem lorem ispusm lorem ispusm lorem
              </Row>
            </Container>
          </div>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}>
                  <img
                    style={companylogo}
                    alt="logo"
                    src="https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5e207a62f14e210b6e9b551b/logo_1579261993651_Parakh_Logo_Wc7J.jpeg"
                  />
                </Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Software Developer
                  </Row>
                  <Row style={{ fontSize: "20px" }}>Linkedin</Row>
                  <Row>(Aug 2019 -2020)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Role description i worked as this and that and then this and
                then xyz lorem ispusm lorem ispusm lorem ispusm lorem ispusm
                lorem ispusm lorem ispusm lorem ispusmlorem ispusm lorem ispusm
                lorem ispusm lorem lorem ispusm lorem ispusm lorem lorem ispusm
                lorem ispusm lorem lorem ispusm lorem ispusm lorem
              </Row>
            </Container>
          </div>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}>
                  <img
                    style={companylogo}
                    alt="logo"
                    src="https://media-exp1.licdn.com/dms/image/C510BAQGcdgv6GT95fQ/company-logo_200_200/0/1530377894696?e=2159024400&v=beta&t=zKCLxAQGLWZpajDjvOUz9BDtk1zGZ3kGO3qQfpEFBV8"
                  />
                </Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Software Developer
                  </Row>
                  <Row style={{ fontSize: "20px" }}>Linkedin</Row>
                  <Row>(Aug 2019 -2020)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Role description i worked as this and that and then this and
                then xyz lorem ispusm lorem ispusm lorem ispusm lorem ispusm
                lorem ispusm lorem ispusm lorem ispusmlorem ispusm lorem ispusm
                lorem ispusm lorem lorem ispusm lorem ispusm lorem lorem ispusm
                lorem ispusm lorem lorem ispusm lorem ispusm lorem
              </Row>
            </Container>
          </div>

          <div className="sizetab">
            <Container className="cardConatiner">
              <Row>
                <Col xl={2} lg={2} sm={4} xs={5}>
                  <img
                    style={companylogo}
                    alt="logo"
                    src="https://pbs.twimg.com/profile_images/1235811600180764674/0jBig00h.jpg"
                  />
                </Col>
                <Col xl={5} lg={4} sm={6} xs={6}>
                  <Row style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Software Developer
                  </Row>
                  <Row style={{ fontSize: "20px" }}>Linkedin</Row>
                  <Row>(Aug 2019 -2020)</Row>
                </Col>
              </Row>
              <Row style={text}>
                Role description i worked as this and that and then this and
                then xyz lorem ispusm lorem ispusm lorem ispusm lorem ispusm
                lorem ispusm lorem ispusm lorem ispusmlorem ispusm lorem ispusm
                lorem ispusm lorem lorem ispusm lorem ispusm lorem lorem ispusm
                lorem ispusm lorem lorem ispusm lorem ispusm lorem
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
const text = {
  padding: "10px"
};
const companylogo = {
  height: "auto",
  width: "90px",
  marginTop: "10px",
  marginLeft: "15px",
  boxShadow: "2px 2px 3px 1px black"
};
export default WorkExperiences;
