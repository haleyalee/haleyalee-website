import React from 'react'

import './Experience.css';

function BrightBuilding() {
  return (
    <div className="company mx-4">
      <div className="name">
        <h2>Software Developer (Front-End) Intern</h2>
        <h4><a href="https://www.brightbuilding.us/">Bright Building</a> • March 2021 - June 2021</h4>
      </div>
      <div className="skill">
        HTML/CSS JavaScript Bootstrap Python Flask
      </div>
      <div className="details">
        <p>
          Having completed my undergraduate degree a semester early, I was lucky to have the opportunity to work remotely in 
          the spring for Bright Building, a startup local to Ithaca, NY. I was one of four student employees, and I worked 
          directly with the Founder/CEO.
        </p>
        <p>
          Bright Building develops a FDD (fault detection and diagnosis) web application that combats energy waste by
          providing powerful and prioritized insights to facilities. My role was to support the enhancement of the web
          application front-end and user experience. 
        </p>
        <p>
          The web application is powered by <span className="skill">Python</span> and the <span className="skill">Flask</span> framework 
          in the back-end and utilizes <span className="skill">Bootstrap</span> in the front-end. With the goal of improving the 
          user experience, I manipulated various Python, JavaScript, HTML, and CSS files to add visual representations and
          better filtering of the building big data. I also was able to identify and correct several inconsistencies in design and 
          redundancies in code.
        </p>
      </div>
    </div>
  )
}

export default BrightBuilding;
