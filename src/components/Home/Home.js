import React from 'react';
import Nav from '../Nav/Nav';
import ProjectCard from '../ProjectCard/ProjectCard';
import Grid from '@material-ui/core/Grid';

function Home() {
  return (
    <div className="container">
      <Nav />

      <div id="quick-intro" className="py-3">
        <h1>Hello! I'm Haley</h1>
        <p>
          I am a UX &amp; Front-End Developer who loves to transform idea into reality. I am an
          Electrical &amp; Computer Engineering alumna from Cornell University and currently,
          a front-end developer at Cognizant.
        </p>
      </div>

      <Grid container spacing={4} id="projects">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <ProjectCard />
        </Grid>
      </Grid>

    </div>
  )
}

export default Home
