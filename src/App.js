import React from 'react';
import './index.scss';
import Header from './containers/Header/Header.js';
import TestAssignment from './containers/TestAssignment/TestAssignment.js';
import Acquainted from './containers/Acquainted/Acquainted.js';
import Relationships from './containers/Relationships/Relationships.js';
import Requirements from './containers/Requirements/Requirements.js';

class App extends React.Component {
  render() {
    return (
    <>
      <Header />
      <TestAssignment />
      <Acquainted />
      <Relationships />
      <Requirements />
    </>
    )
  }
}

export default App;
