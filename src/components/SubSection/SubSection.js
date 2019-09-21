import React, {Component} from 'react';
import './styles.css';

import Bullets from '../Bullets/Bullets';
import Logo from '../Logo/Logo';
import ContentCard from '../ContentCard/ContentCard';

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
            // <div style={{backgroundColor: this.props.backgroundColor}} className="container">
            <div className="container-two-columns">
                <div id="title" style={{color:this.props.backgroundColor}}>
                    {this.props.title}
                </div>
                <div id="columnOne">
                    <span id="col-one-first-half">
                        <ContentCard boxshadow={this.props.backgroundColor} source={this.props.source}/>
                    </span>
                    <span id="col-one-second-half">
                        <ContentCard impact="Infosys has over 100 clients" boxshadow={this.props.backgroundColor}/>
                    </span>
                </div>
                <div id="columnTwo">
                    <ContentCard skills={this.props.skills} boxshadow={this.props.backgroundColor}/>
                    <ContentCard slogan="Navigate Your Next" boxshadow={this.props.backgroundColor}/>
                    <ContentCard companyBackground="Infosys is one of the world's largest IT consultancies." boxshadow={this.props.backgroundColor}/>
                    <ContentCard quotes="I really learned a lot here!" boxshadow={this.props.backgroundColor}/>
                </div>
                
                
                
                {/* 
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
                        </div>
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
                    <ul>
                        {this.props.skills.length != null ?
                            <Bullets bullets={this.bulletDescriptions(this.props.skills)}/>
                        :
                            <Bullets bullets={this.bulletDescriptions("Hi my name is Herbert Su".split(" "))}/>
                        }
                        
                    </ul>
                </div> */}
                
            </div>
        )
    };
};

export default SubSection;