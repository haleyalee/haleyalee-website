import React, { useState } from 'react'
import "./ProjectCard.css";

import Grid from '@material-ui/core/Grid';

function ProjectCard(props) {

  const {image, title, details, skills, links} = props;
  const [hovering, setHovering] = useState(false);
  
  const handleHover = () => {
    setHovering(!hovering);
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}> 
      <div className="project"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >

        <img src={image} alt={title} />

        {/* { hovering &&  */}
        <div className="content">
          <h1>{title}</h1>
          <p>{details}</p>
          <div className="skills">
            { skills.map((skill, idx) => 
              <span key={idx}>{skill}</span>
            )}
          </div>
          <div className="buttons">
            { links.map((link) => 
              <a key={link.id} href={link.url} role="button">{link.action}</a>
            )}
          </div>
        </div>
        {/* } */}

      </div>
    </Grid>
  )
}

export default ProjectCard;
