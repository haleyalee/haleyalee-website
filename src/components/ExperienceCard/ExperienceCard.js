import React from 'react'

import "./ExperienceCard.css";

function ExperienceCard(props) {

  const {image, company} = props;

  return (
    <div className="experience d-flex flex-column flex-md-row">
      <div className="image mb-4">
        <img src={image} alt={company} />
      </div>
      {company}
    </div>
  )
}

export default ExperienceCard
