import React, { useState } from 'react';
import './ContestInfo1.css';
import ContestInfo1Header from './ContestInfo1Header';
import PersonCard from './PersonCard';
import ContestInfo1MiddleSection1 from './ContestInfo1MiddleSection';
import ContestInfo1MiddleSection3 from './ContestInfo1MiddleSection3';
import ContestInfo1MiddleSection2 from './ContestInfo1MiddleSection2';

const ContestInfo1 = () => {
  const [slider, setslider] = useState(50);

  const handleChangeSlider = (e) => {
    setslider(e.target.value);

    console.log(e.target.value);
  };

  return (
    <div className="ContestInfo1">
      <div className="ContestInfo1-LeftContainer">
        <ContestInfo1Header />

        <div className="ContestInfo1-middleSection">

          <ContestInfo1MiddleSection1 />
          <ContestInfo1MiddleSection2 />
          <ContestInfo1MiddleSection3 />


          {/* here i specifically designed section 4 because section 4 is for cards here */}
          <div className="ContestInfo1-middleSection4">
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
          </div>
        </div>
      </div>

      <div className="ContestInfo1-RightContainer">
        <img alt="Profile-img" src={require('../img/background-1.jpg')} />
      </div>
    </div>
  );
};

export default ContestInfo1;
