import React from 'react';
import Grid from '@material-ui/core/Grid';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProjectCard from '../ProjectCard/ProjectCard';

import plantome from '../../images/cards/plantome.png';
import max from "../../images/cards/max.gif";
import cuathome from "../../images/cards/cuathome.png";
import applefest from "../../images/cards/applefest.png";
import curve from "../../images/cards/curve.gif";

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

        {/* Plantome */}
        <ProjectCard 
          image={plantome}
          title={"plantome"}
          details={"ecommerce website to buy plants"}
        />

        {/* Maxwell Lee Portfolio */}
        <ProjectCard 
          image={max}
          title={"MaxLee"}
          details={"personal website for Maxwell Lee"}
        />

        {/* CU@Home */}
        <ProjectCard 
          image={cuathome}
          title={"CU@Home"}
          details={"cornell off-campus housing mobile app design"}
        />

        {/* Ithaca Apple Harvest Festival */}
        <ProjectCard 
          image={applefest}
          title={"AppleFest"}
          details={"website for Ithaca AppleFest"}
        />

        {/* Curve */}
        <ProjectCard 
          image={curve}
          title={"curve"}
          details={"mobile contact tracing app design"}
        />
      </Grid>

      <Footer />
    </div>
  )
}

export default Home
