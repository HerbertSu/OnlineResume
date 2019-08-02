import React, {Component} from 'react';
import './styles.css';

import Bullets from '../Bullets/Bullets';
import Logo from '../Logo/Logo';

class SubSection extends Component{
    /**
     * 
     * @param {array} content Array of statements to describe the job/extracurricular in this section. 
     * @returns Array of list <li> items.
     */
    bulletDescriptions(content){
        let bullets = content.map(description => {
            return(
                <li className="li">
                    {description}
                </li>
            );
        });
        return bullets;
    };

    render(){
        return(
            <div style={{backgroundColor: this.props.backgroundColor}} className="container">
                <div id="title">
                    {this.props.title}
                </div>
                <div id="logo">
                    <Logo/>
                </div>
                <div id="content">
                    <ul>
                        <Bullets bullets={this.bulletDescriptions("Hi my name is Herbert Su".split(" "))}/>
                    </ul>
                </div>
                <div id="linkToCompany">
                    <a className="button" onClick={()=>this.props.goToTop()}> Visit </a>
                </div>
            </div>
        )
    };
};

export default SubSection;