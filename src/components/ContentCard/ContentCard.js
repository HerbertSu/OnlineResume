import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import './style.css';

export default class ContentCard extends Component{

    render(){
        if(this.props.source != null){
            return(
                <span style={{position: 'relative'}}>
                    {/* <img id="content-card-logo" style={{boxShadow:`-10px 10px ${this.props.boxshadow} `}} src={this.props.source} />  */}
                    <Logo source={this.props.source}/>
                    <br/>
                </span>
            )
        }else if(this.props.skills != null){
            return(                
                <span id="content-card-container" style={{backgroundColor: `${this.props.boxshadow}`, boxShadow: '10px 10px #020323'}} >
                    {this.props.skills}
                </span>
            )
        }else if(this.props.slogan != null){
            return(
                <span id="content-card-container" style={{backgroundColor: `${this.props.boxshadow}`, boxShadow: '10px 10px #020323'}}>
                    {this.props.slogan}
                </span>
            );
        }else if(this.props.quotes != null){
            return(
                <span id="content-card-container" style={{backgroundColor: `${this.props.boxshadow}`, boxShadow: '10px 10px #020323'}}>
                    {this.props.quotes}
                </span>
            );
        }else if(this.props.impact != null){
            return(
                <span id="content-card-container" style={{backgroundColor: `${this.props.boxshadow}`, boxShadow: '-10px 10px #020323'}} >
                    {this.props.impact}
                </span>
            );
        }else if(this.props.companyBackground != null){
            return(
                <span id="content-card-container" style={{backgroundColor: `${this.props.boxshadow}`, boxShadow: '10px 10px #020323'}} >
                    {this.props.companyBackground}
                </span>
            )
        }else{
            return(
                <span>
                </span>
            )
        }
    }
}