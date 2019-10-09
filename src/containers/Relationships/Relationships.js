import React from 'react';
import './Relationships.scss';
import CardSkills from '../../companents/CardSkills/CardSkills.js';

const Relationships = () => {
  return (
    <div className="relationships container">
      <h2 className="relationships__header">
        About my relationships <br/>
        with web-development
      </h2>
      <CardSkills />
    </div>
  )
};

export default Relationships;
