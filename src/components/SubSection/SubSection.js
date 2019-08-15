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
                <div id="title" style={{color:this.props.backgroundColor}}>
                    {this.props.title}
                </div>
                <div id="leftFill"></div>
                <div id="rightFill"></div>
                <div id="bottomFill"></div>
                <div id="logo">
                    { this.props.source != null ?
                        <Logo source={this.props.source}/> 
                    :
                        this.props.title
                    }
                    
                </div>
                
                
                {this.props.link != null ?
                    <div id="linkToCompany">
                        <div className="zoom">
                            <a className="button" onClick={()=>window.location = this.props.link}> Visit </a>
                        </div>>
                    </div>
                :
                    <div></div>
                }
                <div id="expDescription">
                    {!(this.props.description == undefined)?
                        this.props.description 
                    :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    }
                </div>
                <div id="expSkills">
                    {/* <text id="skillsTitle">
                        Notable Skills
                    </text> */}
                    <ul>
                        {this.props.skills != null ?
                            <Bullets bullets={this.bulletDescriptions(this.props.skills)}/>
                        :
                            <Bullets bullets={this.bulletDescriptions("Hi my name is Herbert Su".split(" "))}/>
                        }
                        
                    </ul>
                </div>
                
            </div>
        )
    };
};

export default SubSection;