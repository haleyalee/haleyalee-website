import React from 'react';
import Grid from '@material-ui/core/Grid';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProjectCard from '../ProjectCard/ProjectCard';

import "./Home.css";

// project cards
import plantome from '../../images/cards/plantome.webp';
import max from "../../images/cards/max.webp";
import cuathome from "../../images/cards/cuathome.webp";
import applefest from "../../images/cards/applefest.webp";
import curve from "../../images/cards/curve.webp";

function Home() {
  return (
    <div className="container">
      <Nav />

      <div className="p-3 p-sm-0">
        <div id="quick-intro">
          <h1>Hello! I'm Haley,</h1>
          <p>
            a <a href="#projects">UX &amp; Front-End Developer</a> who loves to transform ideas into reality. I am an
            Electrical &amp; Computer Engineering alumna at <a href="https://www.cornell.edu/">Cornell University</a> and 
            currently, a front-end developer at <a href="https://www.cognizant.com/us/en/services/digital-experience">Cognizant</a>.
          </p>
        </div>

        <Grid container spacing={4} id="projects">

          {/* Plantome */}
          <ProjectCard 
            image={plantome}
            title={"plantome"}
            details={"ecommerce website to buy plants"}
            skills={["React", "TypeScript", "Bootstrap", "AWS", "Web Design"]}
            links={[
              { id:"plantome1", url:"https://master.d24fxyynbl59c.amplifyapp.com/", action:"view website" }
            ]}
          />

          {/* Maxwell Lee Portfolio */}
          <ProjectCard 
            image={max}
            title={"MaxLee"}
            details={"personal website for Maxwell Lee"}
            skills={["HTML/CSS", "JavaScript", "Web Design"]}
            links={[
              { id:"maxlee1", url:"https://haleyalee.github.io/max-website/", action:"view website" }
            ]}
          />

          {/* CU@Home */}
          <ProjectCard 
            image={cuathome}
            title={"CU@Home"}
            details={"cornell off-campus housing mobile app design"}
            skills={["PM", "User Research", "UI/UX Design", "Figma"]}
            links={[
              { id:"roommates1", url:"https://www.figma.com/proto/Nrhf1zCux8aVMcuL59sw9C/Roommates?node-id=161%3A5429&scaling=min-zoom", action:"view prototype" },
              { id:"roommates2", url:"https://www.youtube.com/watch?v=gwTsJTsXjFA", action:"watch demo" },
              { id:"roommates3", url:"https://haayle.medium.com/propel-roommates-sprint-01-user-research-5a2227a46269", action:"read case study" }
            ]}
          />

          {/* Ithaca Apple Harvest Festival */}
          <ProjectCard 
            image={applefest}
            title={"AppleFest"}
            details={"[INFO1300] website for Ithaca AppleFest"}
            skills={["HTML/CSS", "User Research", "Web Design"]}
            links={[
              { id:"applefest1", url:"https://pages.github.coecis.cornell.edu/info1300-2020fa/hal64-project2/index.html", action:"view website" }
            ]}
          />

          {/* Curve */}
          <ProjectCard 
            image={curve}
            title={"curve"}
            details={"mobile contact tracing app design"}
            skills={["React Native", "UI/UX Design", "Figma"]}
            links={[
              { id:"curve1", url:"https://github.com/haleyalee/curve", action:"view code" },
              { id:"curve2", url:"https://www.youtube.com/watch?v=eCfADh68Hfk", action:"watch demo" }
            ]}
          />
        </Grid>
      </div>

      <Footer />
    </div>
  )
}

export default Home
