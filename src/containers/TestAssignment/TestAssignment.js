import React from 'react';
import './TestAssignment.scss';
import Button from '../../companents/Button/Button.js';

const TestAssignment = () => {
  return (
    <div className="test-assignment container">
      <h1 className="test-assignment__header">
        Test assignment for <br/>
        Frontend Developer <br/>
        position
      </h1>
      <p className="test-assignment__text">
        We kindly remind you that your test <br/>
        assignment should be submitted as a link <br/>
        to github/bitbucket repository.
      </p>
      <Button className="btn btn__primary" />
    </div>
  )
};

export default TestAssignment;
