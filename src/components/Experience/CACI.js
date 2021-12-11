import React from 'react'

function CACI() {
  return (
    <div className="company mx-4">
      <div className="name">
        <h2>Digital Signal Processing Intern</h2>
        <h4><a href="https://www.cognizant.com/us/en/services/digital-experience">CACI</a> • May 2019 - August 2019</h4>
      </div>
      <div className="skill">
        Python C++ Lime-SDR X-Midas QtDesigner
      </div>
      <div className="details">
        <p>
          During the summer of 2019, I interned at CACI Bit Systems in Sterling, Virginia. I was one of three interns 
          on the Navy Digital Signal Processing (DSP) team.
        </p>
        <p>
          CACI Bit Systems utilizes several digitizing receivers that enable the use of DSP algorithms to conduct various 
          missions. Their most common receivers are incredibly capable but also very expensive. There is a growing market of 
          highly capable cost-effective radio-frequency (RF) digitizer chips that can enable the implementation of software 
          defined radios (SDR) on consumer-grade computer hardware. One such SDR is the <span className="skill">Lime-SDR</span>; 
          a popular, community-backed SDR with a great deal of existing open-source support.
        </p>
        <p>
          Over the course of the summer, my task was to develop the source code in <span className="skill">C++</span> and 
          <span className="skill"> Python</span> to transmit and receive streaming data to and from the Lime-SDR. I integrated 
          the Lime-SDR with the SoapySDR API and utilized the Lime-SDR within the <span className="skill">X-Midas framework</span>, 
          using the already existing receiver as a model. Additionally, I designed an interactive GUI in <span className="skill">Qt 
          Designer</span> that allows the user to tune the parameters of the device in real-time.
        </p>
        <p>
          Ultimately, by the end of my internship, I was able to provide demonstration DSP code that leverages a Lime-SDR and 
          completely demodulates a digital signal down to bits. This enabled us to compare the relative performance of the 
          Lime-SDR's hardware with that of comparable receivers. My work showed that the Lime-SDR is an extremely capable receiver 
          at an attractive cost point. This opens up the potential for new product lines at CACI, such as a "lite" version of 
          their existing products. It also creates the possibility of desktop receivers for developers, which reduces the overhead 
          caused by time-sharing of the limited and more expensive receiver.
        </p>
      </div>
    </div>
  )
}

export default CACI
