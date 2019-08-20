import React, {Component} from 'react';
import './styles.css';

import SideMenuElement from '../SideMenuElement/SideMenuElement';

export default class SideMenu extends Component{
    render(){
        return(
            <div id="side-menu-container">
                <SideMenuElement path="#" bgcolor="red" pageTitle="Home"/>
                <SideMenuElement path="#contentGuide" bgcolor="#40e0d0" pageTitle="Content Guide"/>
                {/* <ul style={{listStyle : 'none'}}>
                    <li>
                        <div id="side-menu-home" >
                            <a href='#'>Home</a>
                        </div>
                    </li>
                    <li>
                        <a href='#contentGuide'>Content Guide</a>
                    </li>
                    <li>
                    <a href='#experience/infosys'>Infosys</a>
                    </li>
                    <li>
                    <a href='#experience/elfin'>ELFIN</a>
                    </li>
                    <li>
                    <a href='#experience/bapsf'>BaPSF</a>
                    </li>
                    <li>
                    <a href='#projects/poligo'>Poligo</a>
                    </li>
                    <li>
                    <a href='#volunteer/bruin_partners'>Bruin Partners</a>
                    </li>
                    <li>
                    <a href='#projects/meet_your_coworkers'>Meet Your Coworkers</a>
                    </li>
                    <li>
                    <a href='#projects/herbertsu.io'>Herbertsu.io</a>
                    </li>
                    <li>
                    <a href='#volunteer/bruin_partners'>Bruin Partners</a>
                    </li>
                    <li>
                    <a href='#volunteer/interact'>Interact</a>
                    </li>
                </ul> */}
            </div>
            
        );
    };
};