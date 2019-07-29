import React, {Component} from 'react';
import ScrollableAnchor, {goToAnchor, goToTop} from 'react-scrollable-anchor';
import {SectionsContainer, Section} from 'react-fullpage';

import logo from './logo.svg';
import './App.css';

import AboutMe from './components/AboutMe/AboutMe';
import SubSection from './components/SubSection/SubSection';

/**
 * TODO:
 *    -Add picture to top left
 *    -Add side menu
 *    -Add button to link to other websites.
 *    -Add parallax
 *    -Remove react-scrollable-anchor; replace with react-fullpage
 *    
 */

let options = {
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              ["header","section1", "section2", "section3"], // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                750, // the scroll animation speed
  navigation:           true, // use dots navigatio
  scrollBar:            false, // use the browser default scrollbar
  sectionClassName:     'Section', // the section class name
  sectionPaddingTop:    '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
};

class App extends Component {

  render()
  {
    return (
      <div className="App">
        
        
        <div className="floatingMenu">
          <ul style={{listStyle : 'none'}}>
            <li>
              <a href='#section1'>Section 1</a>
            </li>
            <li>
              <a href='#section2'>Section 2</a>
            </li>
            <li>
              <a href='#section3'>Section 3</a>
            </li>
          </ul>
        </div>
        <SectionsContainer {...options}>
          <Section>
          <div id='header'>
            <header className="App-header">
              Welcome to Herbert Su's resume.
            </header>
              <AboutMe/>
            </div>
          </Section>
          <Section>
            <SubSection title={'Work Experience'} goToTop={goToTop}/>
          </Section>
          <Section>
            <SubSection title={'Volunteer Experience'} backgroundColor={"#000010"} goToTop={goToTop} style={{display:'grid'}}/>
          </Section>
          <Section>
            <SubSection title={'Projects'} goToTop={goToTop}/>
          </Section>
        </SectionsContainer>
      </div>
    );
  };
};

export default App;
