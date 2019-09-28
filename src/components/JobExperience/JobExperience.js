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

//Technical Experience?
export default class JobExperience extends Component{
    render(){
        return(
            <div id="container-job-exp">
                <div id="title-job-exp">
                    Job Experience
                </div>
                

                <div id="exp-1-logo" className="exp-logo">
                    <img src={infosys} id="logo-cover"/>
                    <span class="button-visit">hi</span>
                </div>


                <div id="exp-1">
                    <JobExpDescription descriptors={bios.INFOSYS_CONTENT} />
                </div>
                <span id="exp-2-logo" className="exp-logo">
                    <img src={bapsf2} id="logo-cover"/>
                </span>

                <div id="exp-2">
                    <JobExpDescription descriptors={bios.BAPSF_CONTENT} />
                </div>

                <span id="exp-3-logo" className="exp-logo">
                    <img src={elfin} id="logo-cover"/>
                </span>
                <div id="exp-3">
                    <JobExpDescription descriptors={bios.ELFIN_CONTENT}/>
                </div>
            </div>
        );
    };
};