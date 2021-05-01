import React from "react";
import { Nav } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import About from "./Aboutme";
import Certifications from "./Certifications";
import Contact from "./Contactme";
import Project from "./Projects";
import WorkExperiences from "./Workexperience";
import Footer from "./Footer";
class Navbars extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: "Aboutme"
    };
  }
  aboutme = () => {
    this.setState({
      activePage: "Aboutme"
    });
    console.log("Active Page :", this.state);
  };
  workExperience = () => {
    this.setState({
      activePage: "Workexperinence"
    });
    console.log("Active Page :", this.state);
  };
  contactme = () => {
    this.setState({
      activePage: "Contactme"
    });
    console.log("Active Page :", this.state);
  };
  certifications = () => {
    this.setState({
      activePage: "Certification"
    });
    console.log("Active Page :", this.state);
  };
  projects = () => {
    this.setState({
      activePage: "Projects"
    });
    console.log("Active Page :", this.state);
  };
  toggle = () => {
    let narrowLinks = document.querySelector(".narrowLinks");
    narrowLinks.classList.toggle("hidden");
  };
  render() {
    const { activePage } = this.state;
    return (
      <div>
        {/* <div style={navbar}>
          <div style={{ fontSize: "31px", marginTop: "0px" }}>Anmol Reshi</div>

          <ul className="listitems">
            <li className="items" onClick={this.aboutme}>
              About
            </li>
            <li className="items" onClick={this.certifications}>
              Certifications
            </li>
            <li className="items" onClick={this.workExperience}>
              Work Experience
            </li>
            <li className="items" onClick={this.projects}>
              Projects
            </li>
            <li className="items" onClick={this.contactme}>
              Contact
            </li>
          </ul>
        </div> */}

        <Nav
          fill
          className="ss"
          variant="pills"
          defaultActiveKey="/home"
          sticky="top"
        >
          <Nav.Item>
            <Nav.Link
              onClick={this.aboutme}
              className="navtab"
              style={{ borderRadius: "0px", fontSize: "23px" }}
              href="/home"
            >
              About
              <img
                alt=""
                style={{ height: "29px", marginLeft: "10px" }}
                src="https://www.flaticon.com/svg/vstatic/svg/709/709722.svg?token=exp=1619454906~hmac=57f45ea1adc27132ecdca3d5cebaefea"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={this.workExperience}
              className="navtab"
              style={{ borderRadius: "0px", fontSize: "23px" }}
              eventKey="link-1"
            >
              Work
              <img
                alt=""
                style={{ height: "29px", marginLeft: "10px" }}
                src="https://www.flaticon.com/svg/vstatic/svg/2910/2910791.svg?token=exp=1619454335~hmac=ccf956642cfe9a204af81cd49dbab796"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={this.projects}
              className="navtab"
              style={{ borderRadius: "0px", fontSize: "23px" }}
              eventKey="link-2"
            >
              Projects
              <img
                alt=""
                style={{ height: "29px", marginLeft: "10px" }}
                src="https://www.flaticon.com/svg/vstatic/svg/1087/1087902.svg?token=exp=1619454625~hmac=8509c541e5a7b8f04b6739c5b486aade"
              />
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link
              onClick={this.certifications}
              className="navtab"
              style={{ borderRadius: "0px", fontSize: "23px" }}
              eventKey="link-3"
            >
              Certifications
              <img
                alt=""
                style={{ height: "29px", marginLeft: "10px" }}
                src="https://www.flaticon.com/svg/vstatic/svg/3631/3631546.svg?token=exp=1619454765~hmac=6ee8dbd2f7fb837780049ec6570a8223
              "
              />
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link
              onClick={this.contactme}
              className="navtab"
              style={{ borderRadius: "0px", fontSize: "23px" }}
              eventKey="Contact"
            >
              Contact
              <img
                alt=""
                style={{ height: "29px", marginLeft: "10px" }}
                src="https://www.flaticon.com/svg/vstatic/svg/1034/1034204.svg?token=exp=1619454853~hmac=305918016329caaf3e7d70337e62f5a2"
              />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activePage === "Aboutme" ? <About /> : null}
        {activePage === "Certification" ? <Certifications /> : null}
        {activePage === "Workexperinence" ? <WorkExperiences /> : null}
        {activePage === "Projects" ? <Project /> : null}
        {activePage === "Contactme" ? <Contact /> : null}
        <Footer />
      </div>
    );
  }
}
// const navbar = {
//   color: "white",
//   backgroundColor: "DodgerBlue",
//   padding: "10px",
//   display: "flex",
//   height: "auto"
// };
export default Navbars;
