import React, {Component} from 'react';
import './style.css';

import Logo from '../Logo/Logo';
import * as elfin from '../../images/elfin.png';
import * as infosys from '../../images/infosys.jpg';
import * as bapsf from '../../images/bapsf.jpg';

//Technical Experience?
export default class JobExperience extends Component{
    render(){
        return(
            <div id="container-job-exp">
                <div id="title-job-exp">
                    Job Experience
                </div>
                
                <span id="exp-1-logo">
                    <Logo source={infosys}/>
                </span>
                <div id="exp-1">
                    
                </div>

                <span id="exp-2-logo">
                    <Logo source={bapsf}/>
                </span>

                <div id="exp-2">
                    
                </div>

                <span id="exp-3-logo">
                    <Logo source={elfin}/>
                </span>
                <div id="exp-3">

                </div>
            </div>
        );
    };
};