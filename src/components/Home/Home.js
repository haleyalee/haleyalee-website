import React from 'react';
import Grid from '@material-ui/core/Grid';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProjectCard from '../ProjectCard/ProjectCard';

import "./Home.css";

// project cards
import plantome from '../../images/cards/plantome.png';
import max from "../../images/cards/max.gif";
import cuathome from "../../images/cards/cuathome.png";
import applefest from "../../images/cards/applefest.png";
import curve from "../../images/cards/curve.gif";

function Home() {
  return (
    <div className="container">
      <Nav />

      <div id="quick-intro">
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
          skills={["react", "typescript", "bootstrap", "AWS", "webdesign"]}
          links={[
            { id:"plantome1", url:"", action:"view website" },
            { id:"plantome2", url:"", action:"view code" }
          ]}
        />

        {/* Maxwell Lee Portfolio */}
        <ProjectCard 
          image={max}
          title={"MaxLee"}
          details={"personal website for Maxwell Lee"}
          skills={["HTML/CSS", "javascript", "webdesign"]}
          links={[
            { id:"maxlee1", url:"https://haleyalee.github.io/max-website/", action:"view website" }
          ]}
        />

        {/* CU@Home */}
        <ProjectCard 
          image={cuathome}
          title={"CU@Home"}
          details={"cornell off-campus housing mobile app design"}
          skills={["PM", "userresearch", "UI/UXdesign", "figma"]}
          links={[
            { id:"roommates1", url:"https://www.figma.com/proto/Nrhf1zCux8aVMcuL59sw9C/Roommates?node-id=161%3A5429&scaling=min-zoom", action:"view prototype" },
            { id:"roommates2", url:"https://www.youtube.com/watch?v=gwTsJTsXjFA", action:"watch demo" },
            { id:"roommates3", url:"", action:"read case study" }
          ]}
        />

        {/* Ithaca Apple Harvest Festival */}
        <ProjectCard 
          image={applefest}
          title={"AppleFest"}
          details={"website for Ithaca AppleFest"}
          skills={["HTML/CSS", "userresearch", "webdesign"]}
          links={[
            { id:"applefest1", url:"https://pages.github.coecis.cornell.edu/info1300-2020fa/hal64-project2/index.html", action:"view website" }
          ]}
        />

        {/* Curve */}
        <ProjectCard 
          image={curve}
          title={"curve"}
          details={"mobile contact tracing app design"}
          skills={["reactnative", "UI/UXdesign", "figma"]}
          links={[
            { id:"curve1", url:"https://github.com/haleyalee/curve", action:"view code" },
            { id:"curve2", url:"https://www.youtube.com/watch?v=eCfADh68Hfk", action:"watch demo" }
          ]}
        />
      </Grid>

      <Footer />
    </div>
  )
}

export default Home
