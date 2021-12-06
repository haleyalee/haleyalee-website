import React from 'react';

import "./Footer.css";

// icons
import mail from "../../images/icons/mail.svg";
import github from "../../images/icons/github.svg";
import linkedin from "../../images/icons/linkedin.svg";
import facebook from "../../images/icons/facebook.svg";
import instagram from "../../images/icons/instagram.svg";

function Footer() {
  return (
    <footer className="d-flex flex-column flex-md-row justify-content-between align-items-center">    
      <div id="socials">
        <a href="mailto:haleyalee@gmail.com"><img src={mail} alt={"Email"} /></a>
        <a href="https://github.com/haleyalee"><img src={github} alt={"Github"} /></a>
        <a href="https://www.linkedin.com/in/haleyalee/"><img src={linkedin} alt={"LinkedIn"} /></a>
        <a href="https://www.facebook.com/profile.php?id=100008368747977"><img src={facebook} alt={"Facebook"} /></a>
        <a href="https://www.instagram.com/hhaleylee/"><img src={instagram} alt={"Instagram"} /></a>
      </div>

      <p>designed and developed by Haley Lee 2021</p>
    </footer>
  )
}

export default Footer;
