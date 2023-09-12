import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sandeep.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sandeep Chatterjee</strong>
              </h1>

              <p className="heading-description blockquote">
              Unlock the Potential of Seamless User Experiences and Amplify Your Online Impact:
              Leveraging HTML, CSS, JavaScript, React, and More to Create Dynamic Websites, Complete with Payment 
              Integration, SEO Mastery, and Beyond
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Unlock Your Website's Full Potential: 
                Contact Me for a Project Collaboration or Grab Your Free, 
                Comprehensive Site Performance Report Now!
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
