import React, { useState } from 'react'
import "./ProjectCard.css";

import Grid from '@material-ui/core/Grid';

function Project(props) {

  const {image, title, details} = props;
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

        { hovering && 
        <div className="content">
          <h1>{title}</h1>
          <p>{details}</p>
        </div>
        }

      </div>
    </Grid>
  )
}

export default Project
