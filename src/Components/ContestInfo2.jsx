import React from 'react';
import './ContestInfo1.css';
import ContestInfo1Header from './ContestInfo1Header';
import ContestInfo1MiddleSection1 from './ContestInfo1MiddleSection';
import ContestInfo1MiddleSection2 from './ContestInfo1MiddleSection2';
import ContestInfo1MiddleSection3 from './ContestInfo1MiddleSection3';
import ContestInfo1MiddleSection4 from './ContestInfo1MiddleSection4';

const ContestInfo2 = () => {
  return (
    <div className="ContestInfo1">
      <div className="ContestInfo1-LeftContainer">
        <ContestInfo1Header />
        <div className="ContestInfo1-middleSection">
           <ContestInfo1MiddleSection1 />
           <ContestInfo1MiddleSection2 />  
           <ContestInfo1MiddleSection3 />
           <ContestInfo1MiddleSection4 />
        </div>
      </div>

      <div className="ContestInfo1-RightContainer">
        <img alt="Profile-img" src={require('../img/background-1.jpg')} />
      </div>
    </div>
  );
};

export default ContestInfo2;
