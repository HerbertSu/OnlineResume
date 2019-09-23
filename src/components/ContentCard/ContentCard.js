import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import './style.css';

export default class ContentCard extends Component{

    render(){
        if(this.props.column == "right"){
            return(
                <span id="content-card-container" style={{backgroundColor: `${this.props.boxshadow}`, boxShadow: '10px 10px #020323'}}>
                    {this.props.content}
                </span>
            )
        }else{
            return(
                <span id="content-card-container" style={{backgroundColor: `${this.props.boxshadow}`, boxShadow: '-10px 10px #020323'}}>
                    {this.props.content}
                </span>
            )
        }
        
    }
}