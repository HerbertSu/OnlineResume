import React, {Component} from 'react';
import ScrollableAnchor, {goToAnchor, goToTop} from 'react-scrollable-anchor';
import {SectionContainer, Section} from 'react-fullpage';

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

class App extends Component {

  render()
  {
    return (
      <div className="App">
        <div id='header'>
          <header className="App-header">
            Welcome to Herbert Su's resume.
          </header>
          <AboutMe/>
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
        </div>
        
        <div className='screen' id='experience1'>
          <ScrollableAnchor id={'section1'} onScrollDown={()=>{goToAnchor('section2')}}>
            <SubSection title={'Work Experience'} goToTop={goToTop}/>
          </ScrollableAnchor>
        </div>
        
        <div className='screen' id='volunteer1'>
          <ScrollableAnchor id={'section2'} style={{display: 'grid'}}>
            <SubSection title={'Volunteer Experience'} backgroundColor={"#000010"} goToTop={goToTop} style={{display:'grid'}}/>
          </ScrollableAnchor>
        </div>
        
        <div className='screen' id='project1'>
          <ScrollableAnchor id={'section3'}>
            <SubSection title={'Projects'} goToTop={goToTop}/>
          </ScrollableAnchor>
        </div>
        
      </div>
    );
  };
};

export default App;
