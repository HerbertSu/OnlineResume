import React, {Component} from 'react';
import './styles.css';

export default class SideMenuElement extends Component{

    render(){
        return(
            <div className="element-container" style={{background:this.props.bgcolor}}>
                <a href={this.props.path}>{this.props.pageTitle}</a>
            </div>
        );
    };
};