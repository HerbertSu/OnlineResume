import React, {Component} from 'react';
import {SectionsContainer, Section} from 'react-fullpage';

import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing/Landing';
import SubSection from './components/SubSection/SubSection';
import ContentGuide from './components/ContentGuide/ContentGuide';

/**
 * TODO:
 *  x  -Add picture to top left
 *    -Add side menu
 *    -Add button to link to other websites.
 *    -Add parallax
 *  x  -Remove react-scrollable-anchor; replace with react-fullpage
 *  x  -Add a "Table of Contents" section after landing telling the color scheme of backgrounds
 *    -Collect pictures of my companies'/experiences' logos
 *    -Add content to each experience section
 *    -Color Scheme possibilities: 
 *        -Turquoise, coral, ivory
 *        -#A299CA (lavendar), #7CCAAE (green), #ECEC84 (lemon)
 */

let options = {
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              ["landing","tableOfContents","section1", "section2", "section3"], // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
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
            <Landing/>
          </Section>
          <Section>
            <ContentGuide/>
          </Section>
          <Section>
            <SubSection title={'Work Experience'}/>
          </Section>
          <Section>
            <SubSection title={'Volunteer Experience'} backgroundColor={"#000010"} style={{display:'grid'}}/>
          </Section>
          <Section>
            <SubSection title={'Projects'} />
          </Section>
        </SectionsContainer>
      </div>
    );
  };
};

export default App;
