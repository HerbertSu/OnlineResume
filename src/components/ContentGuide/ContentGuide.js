import React, {Component} from 'react';
import './styles.css';

export default class ContentGuide extends Component{
    render(){
        return(
            <div id="contentGuideContainer">
                <div id="contentGuideTitle">
                    Content Guide
                </div>
                <div id="aboutMeSectionName">
                    AboutMe
                </div>
                <div id="expSectionName">
                    Programming Experience
                </div>
                <div id="projectsSectionName">
                    Projects
                </div>
                <div id="volunteerSectionName">
                    Volunteer
                </div>
                <div id="expSection">
                    <ul>
                        <li>Infosys</li>
                        <li>ELFIN</li>
                        <li>BaPSF</li>
                        <li>Camp Counselor</li>
                    </ul>
                </div>
                    <ul>
                        <li>Poligo</li>
                        <li>Meet Your Coworkers</li>
                        <li>Herbert.su.io</li>
                    </ul>
                <div id="projectsSection">

                </div>
                <div id="volunteerSection">
                    <ul>
                        <li>Bruin Partners</li>
                        <li>Undergraduate TA</li>
                        <li>Interact Webmaster</li>
                    </ul>
                </div>
            </div>
        );
    };
};