import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{textAlign:'justify'}}>
    Hi Everyone, I am <span className="purple">Sandeep Chatterjee</span> from{" "}
    <span className="purple">Indore, India.</span>
    <br />
    A passionate Software Engineer who thrives on bringing ideas to life
    through code.
    <br />
    Driven by creativity, I design and develop with expertise in crafting
    tailored websites utilizing technologies like ReactJs, JavaScript,
    Typescript, HTML5, and CSS3. I've also delved into the world of crafting
    Express.js apps, seamlessly integrating Payment Gateways for enhanced
    experiences. Furthermore, my expertise extends to web app optimization,
    with a proficiency in PWA implementation, SEO mastery in React, and
    proficiency in Testing Libraries and React Profiler.
    <br />
    Beyond coding, I'm equally enthralled by various other activities:
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Embracing the World of Gaming
    </li>
    <li className="about-activity">
      <ImPointRight /> Sharing Insights Through Tech Blogs
    </li>
    <li className="about-activity">
      <ImPointRight /> Exploring Through Travel
    </li>
    <li className="about-activity">
      <ImPointRight /> Immersed in the Cinematic World
    </li>
  </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
