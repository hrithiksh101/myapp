import React from 'react';
import './CompanyInfo1.css';
import InfoCard from './InfoCard';

const CompanyInfo1 = () => {
  return (
    <div className="ContestInfo1">
      <div className="CompanyInfo1-LeftContainer">
        <div className="CompanyInfo1-ImageContainer">
          <img
            alt="company-image"
            src={require(`../img/auroraBorealis.jpeg`)}
          />

         <i className="material-icons">arrow_back_ios</i>         

          <div>
            {' '}
            BITCON CASH <br /> BCH <br /> 29.3{' '}
          </div>



        </div>

        <div className="CompanyInfo1MiddleSection1">
          <div>
            {' '}
            Change <br /> 4{' '}
          </div>
          <div>
            {' '}
            %Change <br /> 8.6{' '}
          </div>
          <div>
            {' '}
            P/E <br /> 8.5{' '}
          </div>
        </div>

        <div className="CompanyInfo1MiddleSection2">
          <div className="CompanyInfo1ButtonSection">
            <button>
              {' '}
              <i className="material-icons">compare_arrows</i> &nbsp; Compare{' '}
            </button>
            <button>
              {' '}
              <i className="material-icons">grade</i> &nbsp; WishList{' '}
            </button>
          </div>
        </div>

        <div className="CompanyInfo1ScrollableSection">
          <InfoCard item={'Line Plot(7 days)'} quantity={'210000'} />
          <InfoCard item={'Max .Supply'} quantity={'18544437'} />
          <InfoCard item={'Circulating Supply'} quantity={'22'} />
          <InfoCard item={'Total Supply'} quantity={'0.516745'} />
          <InfoCard item={'Percent Change 1hr'} quantity={'0.596436'} />
          <InfoCard item={'Percent Change 24hr'} quantity={'-0.325435'} />
          <InfoCard item={'Percent Change 7d'} quantity={'-1.3256435'} />
          <InfoCard item={'Volume 24hr'} quantity={'13954354.543'} />
          <InfoCard item={'Marker 24hr'} quantity={'20'} />
          <InfoCard item={'Marker Cap'} quantity={'20'} />
        </div>

        <div className="CompanyInfo1LowerSection">
          <div>
            <span className="infoCardSpan1"> STAT DETAILS  </span>
            <span className="infoCardSpan2"> <i className="material-icons">expand_more</i> </span>
          </div>
          <div>
            <span className="infoCardSpan1"> COMPANY HISTORY  </span>
            <span className="infoCardSpan2"> <i className="material-icons">expand_more</i> </span>
          </div>
        </div>


      </div>

      <div className="ContestInfo1-RightContainer">
        <img alt="Profile-img" src={require('../img/background-1.jpg')} />
      </div>
    </div>
  );
};

export default CompanyInfo1;
