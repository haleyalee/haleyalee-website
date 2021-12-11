import React from 'react';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import Cognizant from './Cognizant';
import BrightBuilding from './BrightBuilding';
import CACI from './CACI';
import Forever21 from './Forever21';

// import images
import cognizant from '../../images/cards/cognizant.jpg';
import brightbuilding from '../../images/cards/bb.jpg';
import caci from '../../images/cards/caci.jpg';
import xxi from '../../images/cards/xxi.png';

import './Experience.css'

function Experience() {
  return (
    <div id="experiences" className="container">
      <Nav />

      <h1>Experiences</h1>

      {/* Cognizant */}
      <ExperienceCard 
        image={cognizant}
        company={<Cognizant/>}
      />

      {/* Bright Building */}
      <ExperienceCard 
        image={brightbuilding} 
        company={<BrightBuilding />} />

      {/* CACI */}
      <ExperienceCard 
        image={caci}
        company={<CACI />}
      />

      {/* Forever 21 */}
      <ExperienceCard 
        image={xxi}
        company={<Forever21 />}
      />

      <Footer />
    </div>
  )
}

export default Experience;
