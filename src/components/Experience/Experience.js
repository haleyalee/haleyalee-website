import React from 'react';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import Cognizant from './Cognizant';
import BrightBuilding from './BrightBuilding';
import CACI from './CACI';
import Forever21 from './Forever21';

// import images
import cognizant from '../../images/cards/cognizant.webp';
import brightbuilding from '../../images/cards/bb.webp';
import caci from '../../images/cards/caci.webp';
import xxi from '../../images/cards/xxi.webp';

import './Experience.css'

function Experience() {
  return (
    <div id="experiences" className="container">
      <Nav />

      <div className="p-3 p-sm-0">
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
      </div>

      <Footer />
    </div>
  )
}

export default Experience;
