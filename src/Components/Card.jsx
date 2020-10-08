import React from 'react';

const Card = ({ name, position, university , imageUrl }) => {



  return (
    <div className="box">
      <img alt="Profile-img" src={require(`../img/${imageUrl}`)} />
      <h4 className="card-text">{ name }</h4>
      <p> { position } </p>
      <p> { university } </p>
    </div>
  );
};

export default Card;
