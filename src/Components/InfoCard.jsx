import React from 'react';

const infoCard = ({ item, quantity }) => {
  console.log(item, quantity);

  return (
    <div className="infoCard">
      <div>
        <span className = "infoCardSpan1" > {item} </span>
        <span className = "infoCardSpan2" > {quantity} </span>
      </div>

      <hr />
    </div>
  );
};

export default infoCard;
