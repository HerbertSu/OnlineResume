import React, {Component} from 'react';
import * as url from '../../images/IMG_2314.jpg';

class Logo extends Component{
    render(){
        return(
            <img src={url} height='100px' width='auto'/>
        );
    };
};

export default Logo;