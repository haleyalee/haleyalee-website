import React, { useState } from 'react'
import "./ProjectCard.css";

function Project() {

  const [hovering, setHovering] = useState(false);
  
  const handleHover = () => {
    setHovering(!hovering);
  }

  return (
    <div className="project"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >

      <img src="" alt="placeholder" />

      { hovering && 
      <div className="content">
        <h1>Project Title</h1>
        <p>Description</p>
      </div>
      }

    </div>
  )
}

export default Project
