import React, {Component} from 'react';
import './styles.css';
import * as portrait from '../../images/IMG_2314.jpg';

export default class Landing extends Component{
    render(){
        return(
            <div id='landing'>
                <img src={portrait} id="portrait"/>
                <div id="headline">
                    Herbert Su's 
                    <div> 
                        online resume
                    </div>
                </div>

                <div id="email">
                    Email: herbertsu95@gmail.com
                </div>
                <div id="cellPhone">
                    Cell: 510-928-1089
                </div>

                <div id="aboutMe">
                    About Me:
                    <div>
                        <p>
                            Hi there! My name is Herbert and welcome to my website. 
                        </p>
                        <p>
                            I am an ambitious individual looking to further my skills as a software/full-stack developer. Each piece of code I write, whether it be a small function or a library of modules, brings me joy because it is something I know I created. What I look for most in a position is its capacity for me to learn, to think differently, to see things I have never seen before, and above all, to create.    
                        </p>
                    </div>
                </div>
            </div>
        );
    };
};