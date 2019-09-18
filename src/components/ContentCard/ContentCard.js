import React, {Component} from 'react';
import './style.css';

export default class ContentCard extends Component{
    render(){
        if(this.props.source != null){
            return(
                <div id="content-card-container">
                    {this.props.source ? 
                        <img id="content-card-logo" style={{boxShadow:`10px 10px ${this.props.boxshadow} `}} src={this.props.source} /> 
                    :
                        this.props.skills
                    }
                </div>
            )
        }else if(this.props.skills != null){
            return(
                <div id="content-card-container">
                    {this.props.skills}
                </div>
            )
        }else if(this.props.slogan != null){
            return(
                <div>
                    {this.props.slogan}
                </div>
            );
        }else if(this.props.quotes != null){
            return(
                <div>
                    {this.props.quotes}
                </div>
            );
        }else if(this.props.impact != null){
            return(
                <div>
                    {this.props.impact}
                </div>
            );
        }else if(this.props.companyBackground != null){
            return(
                <div>
                    {this.props.companyBackground}
                </div>
            )
        }else{
            return(
                <span>
                </span>
            )
        }
    }
}