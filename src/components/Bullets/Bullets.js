import React, {Component} from 'react';
import './styles.css';

class Bullets extends Component{
    render(){
        return(
            <div className="bulletContainer">
                {this.props.bullets}
            </div>
        );
    };
};

export default Bullets;