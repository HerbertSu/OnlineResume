import React, {Component} from 'react';
import './styles.css';

import Bullets from '../Bullets/Bullets';

class Section extends Component{
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
        console.log(bullets)
        return bullets;
    };

    render(){
        return(
            <div style={{backgroundColor: this.props.backgroundColor}} className="section">
                {this.props.title}
                <ul>
                    <Bullets bullets={this.bulletDescriptions("Hi my name is Herbert Su".split(" "))}/>
                </ul>
                <a className="button" onClick={()=>this.props.goToTop()}>Back To Top </a>
            </div>
        )
    };
};

export default Section;