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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit lectus elementum varius dapibus. Vivamus vitae feugiat massa. Donec nulla ante, porta nec erat vitae, pulvinar maximus magna. Proin vulputate diam sed ligula bibendum varius. Ut feugiat lacus non lectus tempor, vitae laoreet felis vestibulum. Nullam ac elit id lectus pretium fringilla at eget nisl. Integer a mi semper, ultricies tortor eget, fermentum est. Ut bibendum justo in imperdiet pretium. Nulla facilisi. Duis fermentum augue augue. Nunc et ex quis magna aliquam blandit. Nulla at rutrum risus, nec gravida augue. Suspendisse in libero lacus. Praesent aliquet, augue vel commodo ultricies, nibh lectus lobortis nisl, et aliquet massa sapien a urna. Maecenas venenatis, eros quis dapibus tincidunt, diam lorem tempus est, et molestie odio magna vel risus.
                    </div>
                </div>
            </div>
        );
    };
};