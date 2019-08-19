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
                    {!(this.props.description == undefined) && this.props.skills.length > 0 ?
                        this.props.description 
                    :
                        <div id="fullDescription">
                            {this.props.description}
                        </div>
                    }
                </div>
                <div id="expSkills">
                    {/* <text id="skillsTitle">
                        Notable Skills
                    </text> */}
                    <ul>
                        {this.props.skills.length != null ?
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