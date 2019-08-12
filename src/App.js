import React, {Component} from 'react';
import {SectionsContainer, Section} from 'react-fullpage';

import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing/Landing';
import SubSection from './components/SubSection/SubSection';
import ContentGuide from './components/ContentGuide/ContentGuide';

import * as bp from './images/bruin_partners.png';
import * as ec_rec from './images/ec_rec.png';
import * as elfin from './images/elfin.png';
import * as infosys from './images/infosys.jpg';
import * as interact from './images/interact.png';

/**
 * TODO:
 *  x  -Add picture to top left
 *    -Add side menu
 *    -Add button to link to other websites.
 *    -Add parallax
 *  x  -Remove react-scrollable-anchor; replace with react-fullpage
 *  x  -Add a "Table of Contents" section after landing telling the color scheme of backgrounds
 *    -Collect pictures of my companies'/experiences' logos
 *      -Infosys, ELFIN, BaPSF, EC Camp Counselor, Bruin Partners, Interact Webmaster, Poligo, Meet Your Infoscions, This website
 *    -Add content to each experience section
 *    -Color Scheme possibilities: 
 *        -Turquoise, coral, ivory
 *        -#A299CA (lavendar), #7CCAAE (green), #ECEC84 (lemon)
 */

let options = {
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              ["landing",
                          "contentGuide",
                          "experience/infosys", 
                          "experience/elfin", 
                          "experience/baspf", 
                          "experience/ec_community",
                          "projects/poligo",
                          "projects/meet_your_coworkers",
                          "projects/herbert.su.io",
                          "volunteer/bruin_partners",
                          "volunteer/interact",
                        ], // the anchors for each sections
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

const EXP_COLOR = "#40e0d0";
const PRO_COLOR = "#f88379";
const VOL_COLOR = "#ecdb84";

class App extends Component {

  render()
  {
    return ( 
      <div className="App">
             
        {/* <div className="floatingMenu">
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
        </div> */}

        <SectionsContainer {...options}>
          <Section>
            <Landing/>
          </Section>
          <Section>
            <ContentGuide/>
          </Section>
          <Section>
            <SubSection title={'Infosys'} backgroundColor={EXP_COLOR} source={infosys}/>
          </Section>
          <Section>
            <SubSection title={'ELFIN'} backgroundColor={EXP_COLOR} source={elfin}/>
          </Section>
          <Section>
            <SubSection title={'BaPSF'} backgroundColor={EXP_COLOR}/>
          </Section>
          <Section>
            <SubSection title={'El Cerrito Community Center'} backgroundColor={EXP_COLOR} source={ec_rec}/>
          </Section>
          <Section>
            <SubSection title={'Poligo'} backgroundColor={PRO_COLOR} />
          </Section>
          <Section>
            <SubSection title={'Meet Your Infoscions'} backgroundColor={PRO_COLOR}/>
          </Section>
          <Section>
            <SubSection title={'Herbert.su.io'} backgroundColor={PRO_COLOR}/>
          </Section>
          <Section>
            <SubSection title={'Bruin Partners'} backgroundColor={VOL_COLOR} source={bp}/>
          </Section>
          <Section>
            <SubSection title={'Interact'} backgroundColor={VOL_COLOR} source={interact}/>
          </Section>
        </SectionsContainer>
      </div>
    );
  };
};

export default App;
