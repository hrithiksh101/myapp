import React from 'react';

const PersonCard = () => {
  return (
    <div className="PersonCard">
      <div className="PersonCard-left">

        <div className="PersonCard-left-img">
          <img
            className=""
            alt="player-profile"
            src={require('../img/2.jpeg')}
          />
        </div>

        <div className="PersonCard-left-player">
          <p>Player - 1</p>
        </div>
      </div>
      <div className="PersonCard-right">
      
        <div className="PersonCard-right-icon">
          <i className="material-icons">sync_alt</i>
        </div>

        <div className="PersonCard-right-rank">

          Rank
        <p>1</p> 
        </div>
        <div className="PersonCard-right-Change">

         %Change 
          
          2.5%
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
