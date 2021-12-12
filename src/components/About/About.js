import React from 'react';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import './About.css';

import me from '../../images/me.jpg';

function About() {
  return (
    <div id="about" className="container">
      <Nav />

      <div className="d-flex flex-column justify-content-between flex-md-row p-3 p-sm-0">
        <div className="image col-12 col-md-6">
          <img src={me} alt="Haley Lee" />
        </div>
        <div className="details col-12 col-md-6">
          <h1>Hi!</h1>
          <p>
            I'm Haley, a self-taught UX &amp; front-end developer. I graduated from Cornell University
            where I studied Electrical &amp; Computer Engineering. However, the semester before I graduated,
            I decided to switch career paths to pursue my newly discovered passion
            <span className="yellow"><b> :-)</b></span>
          </p>
          <p>
            In my free time, I enjoy going to coffee shops (but not drinking coffee), exercising, baking, 
            playing the piano, and exploring new places. I'm always looking to learn new things and create 
            some exciting projects!
          </p>
          <p>
            If you're interested in working together, please shoot me an email at
            <a href="mailto:haleyalee@gmail.com" className="yellow"><b> haleyalee@gmail.com</b></a>
          </p>

          <a id="resume" href="https://drive.google.com/file/d/1l4rPOThH55Gx0LCqT2qhamGkpfMJFsus/view">View My Resume</a>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About;
