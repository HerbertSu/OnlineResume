import React, {Component} from 'react';
import './styles.css';

class Logo extends Component{
    render(){
        return(
            <img src={this.props.source} id="logo"/>
        );
    };
};

export default Logo;