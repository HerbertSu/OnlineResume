import React, {Component} from 'react';
import ScrollableAnchor, {goToAnchor, goToTop} from 'react-scrollable-anchor';

import logo from './logo.svg';
import './App.css';

import Section from './components/Section/Section';

/**
 * TODO:
 *    -Add picture to top left
 *    -Add side menu
 *    -Add button to link to other websites.
 *    -Add parallax
 */

class App extends Component {

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to Herbert Su's resume.
        </header>
        <a href='#section1'>Section 1</a>
        <a href='#section2'>Section 2</a>
        <a href='#section3'>Section 3</a>
        <ScrollableAnchor id={'section1'} onScrollDown={()=>{goToAnchor('section2')}}>
          <Section title={'Work Experience'} goToTop={goToTop}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <Section title={'Volunteer Experience'} backgroundColor={"#000010"} goToTop={goToTop}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <Section title={'Projects'} goToTop={goToTop}/>
        </ScrollableAnchor>
      </div>
    );
  };
};

export default App;
