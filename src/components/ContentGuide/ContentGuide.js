import React, {Component} from 'react';
import './styles.css';

export default class ContentGuide extends Component{
    render(){
        return(
            <div id="contentGuideContainer">
                <div id="contentGuideTitle">
                    Content Guide
                </div>
                <div id="aboutMeSectionName" className="contentSectionNames">
                    About Me
                </div>
                <div id="expSectionName" className="contentSectionNames exp">
                    Job Experience
                </div>
                <div id="projectsSectionName" className="contentSectionNames project">
                    Projects
                </div>
                <div id="volunteerSectionName" className="contentSectionNames volunteer"> 
                    Volunteer
                </div>
                <div className="contentDivider"></div>
                <div id="expSection" className="contentSection">
                    <ul>
                        <li>Infosys</li>
                        <li>ELFIN</li>
                        <li>BaPSF</li>
                        {/* <li>Camp Counselor</li> */}
                    </ul>
                </div>
                <div id="projectsSection" className="contentSection">
                    <ul>
                        <li>Poligo</li>
                        <li>Meet Your Coworkers</li>
                        <li>My Online Resume</li>
                    </ul>
                </div>
                <div id="volunteerSection" className="contentSection">
                    <ul>
                        <li>Bruin Partners</li>
                        {/* <li>Undergraduate TA</li> */}
                        <li>Interact Webmaster</li>
                    </ul>
                </div>
            </div>
        );
    };
};