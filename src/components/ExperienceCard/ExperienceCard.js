import React from 'react'

import "./ExperienceCard.css";

function ExperienceCard(props) {

  const {image, company} = props;

  return (
    <div className="experience">
      <div className="image">
        <img src={image} alt={company} />
      </div>
      {company}
      {/* <div className="content">
        { (company === "Cognizant") && <Cognizant /> }
        { (company === "Bright Building") && <BrightBuilding /> }
        { (company === "CACI") && <CACI /> }
        { (company === "Forever 21") && <Forever21 /> }
      </div> */}
    </div>
  )
}

export default ExperienceCard
