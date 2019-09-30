import React, {Component} from 'react';
import './style.css';

import Logo from '../Logo/Logo';
import JobExpDescription from '../JobExpDescription/JobExpDescription';

// import * as elfin from '../../images/elfin.png';
import * as elfin from '../../images/elfin2.png';
// import * as infosys from '../../images/infosys.jpg';
import * as infosys from '../../images/infosys2.png';
import * as bapsf from '../../images/bapsf.jpg';
import * as bapsf2 from '../../images/bapsf2.jpg';
import * as bapsfLogo from '../../images/bapsf-logo.png';

import * as bios from '../../bios';
import * as links from '../../links';

//Technical Experience?
export default class JobExperience extends Component{
    render(){
        return(
            <div id="container-job-exp">
                <div id="title-job-exp">
                    Job Experience
                </div>
                

                <div id="exp-1-logo" className="exp-logo-container">
                    <img src={infosys} id="logo-cover"/>
                    <div className="overlay"><a href={links.INFOSYS}>Visit</a></div>
                </div>
                <div id="exp-1" className="exp-content-container">
                    <JobExpDescription descriptors={bios.INFOSYS_CONTENT} />
                </div>


                <div id="exp-2-logo" className="exp-logo-container">
                    <img src={bapsf2} id="logo-cover"/>
                    <div className="overlay"><a href={links.BAPSF}>Visit</a></div>
                </div>
                <div id="exp-2" className="exp-content-container">
                    <JobExpDescription descriptors={bios.BAPSF_CONTENT} />
                </div>


                <div id="exp-3-logo" className="exp-logo-container">
                    <img src={elfin} id="logo-cover"/>
                    <div className="overlay"><a href={links.ELFIN}>Visit</a></div>
                </div>
                <div id="exp-3" className="exp-content-container">
                    <JobExpDescription descriptors={bios.ELFIN_CONTENT}/>
                </div>
            </div>
        );
    };
};