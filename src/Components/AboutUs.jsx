import React from 'react';
import './AboutUs.css';
import Card from './Card';

const AboutUs = () => {
  return (
    <div className="AboutUsBody">
      <nav className="navigation-bar">
        {/* {' '}
        This is the navigation bar replace this tag with your navigation bar{' '} */}

        <img
          className="company-logo"
          alt="company-logo"
          src={require('../img/6.jpeg')}
        />
      </nav>

      <div className="top-section">
        <h1 className="top-heading">OUR TEAM</h1>
        <p className="top-paragraph">
          We are extremely selective when it comes to adding people to our team.
          We’ve blended young, tech-savvy people with seasoned industry experts
          who are relentless in their efforts to help others succeed.
        </p>
      </div>

      <div className="middle-section">
        {/* This is the first row */}

        <div className="row">
          <Card
            name={'AVINASH ANUPAM'}
            position={'CO FOUNDER'}
            university={'PES UNIVERSITY'}
            imageUrl={'1.jpeg'}
          />
          <Card
            name={'Yashraj Singh'}
            position={'CO FOUNDER'}
            university={'IIT AND AIIMS JODHPUR'}
            imageUrl={'2.jpeg'}
          />
          <Card
            name={'RAHUL RAJ'}
            position={'CO FOUNDER'}
            university={'IIT BOMBAY'}
            imageUrl={'3.jpeg'}
          />
          <Card
            name={'YASH BHARDWAJ'}
            position={'DATA LEAD'}
            university={'PES UNIVERSITY'}
            imageUrl={'5.png'}
          />

          {/* This is the second row */}

          <Card
            name={'SHARAD CHAUBEY'}
            position={'DESIGEN LEAD'}
            university={'PES UNIVERSITY'}
            imageUrl={'5.png'}
          />
          <Card
            name={'ROHAN MALLESH'}
            position={'APP DEVELOPMENT LEAD'}
            university={'PES UNIVERSITY'}
            imageUrl={'5.png'}
          />
          <Card
            name={'DEVLEENA BANERJEE'}
            position={'MACHINE LEARNING INTERN'}
            university={'IIM INDORE'}
            imageUrl={'5.png'}
          />
          <Card
            name={'AVI SINGH LOCHAV'}
            position={'MACHINE LEARNING INTERN'}
            university={'MICHIGAN STATE UNIVERSITY'}
            imageUrl={'5.png'}
          />

          {/* Third Row */}
          <Card
            name={'EKANSH JAIN'}
            position={'MACHINE LEARNING INTERN'}
            university={'IIT KHARAGPUR'}
            imageUrl={'5.png'}
          />
          <Card
            name={'PRIYANSHI SAXENA'}
            position={'MACHINE LEARNING'}
            university={'BMS College Of Engineering'}
            imageUrl={'5.png'}
          />
          <Card
            name={'OMAR WAEL'}
            position={'MACHINE LEARNING'}
            university={'GUC CAIRO'}
            imageUrl={'5.png'}
          />
          <Card
            name={'KESHAV RATHODE'}
            position={'APP DEVELOPER'}
            university={'MICHIGAN STATE UNIVERSITY'}
            imageUrl={'5.png'}
          />

          {/* This is the fourth row */}

          <Card
            name={'HRITHIK SHRIVASTAVA'}
            position={'WEB DEVLOPER INTERN'}
            university={'L.N.C.T.E'}
            imageUrl={'5.png'}
          />
          <Card
            name={'PRIYANSH JAIN'}
            position={'WEB DEVLOPER INTERN '}
            university={'PES UNIVERSITY'}
            imageUrl={'5.png'}
          />
          <Card
            name={'ADWAIT DESHMUKH'}
            position={'WEB DEVLOPER INTERN'}
            university={'IIM INDORE'}
            imageUrl={'5.png'}
          />
          <Card
            name={'Random'}
            position={'Random'}
            university={'Random'}
            imageUrl={'5.png'}
          />

        </div>
      </div>
      <nav className="navigation-bar">
        {/* {' '}
        This is the navigation bar replace this tag with your  footer{' '} */}

        <img
          className="company-logo"
          alt="company-logo"
          src={require('../img/6.jpeg')}
        />
      </nav>
    </div>
  );
};

export default AboutUs;
