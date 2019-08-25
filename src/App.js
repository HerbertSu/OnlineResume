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
import * as bapsf from './images/bapsf.jpg';
import * as poligo from './images/poligo.jpg';
import * as coworkers from './images/coworkers.png';
import * as website from './images/website.png';

import * as bios from './bios';

import * as links from './links';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

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
 *    -Make mobile compatible
 */
 
let options = {
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              ["landing",
                          "contentGuide",
                          "experience/infosys", 
                          "experience/elfin", 
                          "experience/bapsf", 
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
            <SubSection title={'Infosys'} link={links.INFOSYS} skills={bios.INFOSYS_SKILLS} description={bios.INFOSYS_DESC} backgroundColor={EXP_COLOR} source={infosys}/>
          </Section>
          <Section>
            <SubSection title={'ELFIN'} link={links.ELFIN} skills={bios.ELFIN_SKILLS} description={bios.ELFIN_DESC} backgroundColor={EXP_COLOR} source={elfin}/>
          </Section>
          <Section>
            <SubSection title={'BaPSF'} link={links.BAPSF} skills={bios.BAPSF_SKILLS} description={bios.BAPSF_DESC} backgroundColor={EXP_COLOR} source={bapsf}/>
          </Section>
          <Section>
            <SubSection title={'El Cerrito Community Center'} link={links.EC_REC} skills={bios.EC_SKILLS} description={bios.EC_DESC} backgroundColor={EXP_COLOR} source={ec_rec}/>
          </Section>
          <Section>
            <SubSection title={'Poligo'} link={links.POLIGO} skills={bios.POLGIO_SKILLS} description={bios.POLIGO_DESC} backgroundColor={PRO_COLOR} source={poligo}/>
          </Section>
          <Section>
            <SubSection title={'Meet Your Coworkers'} skills={bios.COWORKERS_SKILLS} description={bios.COWORKERS_DESC} backgroundColor={PRO_COLOR} source={coworkers}/>
          </Section>
          <Section>
            <SubSection title={'Herbert.su.io'} skills={bios.WEBSITE_SKILLS} description={bios.WEBSITE_DESC} backgroundColor={PRO_COLOR} source={website}/>
          </Section>
          <Section>
            <SubSection title={'Bruin Partners'} skills={bios.BRUIN_PARTNERS_SKILLS} description={bios.BRUIN_PARTNERS_DESC} link={links.BRUIN_P} backgroundColor={VOL_COLOR} source={bp}/>
          </Section>
          <Section>
            <SubSection title={'Interact'} skills={bios.INTERACT_SKILLS} description={bios.INTERACT_DESC} backgroundColor={VOL_COLOR} source={interact}/>
          </Section>
        </SectionsContainer>
      </div>
    );
  };
};

export default App;
