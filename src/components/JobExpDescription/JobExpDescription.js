import React, {Component} from 'react';
import './style.css';

export default class JobExpDescription extends Component{
    constructor(){
        super();
    };

    returnDescriptors = (props) => {

        let descArr = props.descriptors.map((content, i) => {
            let end = false;
            if(i == props.descriptors.length - 1){
                end = true;
            };
            return(
                <div id="container-content">
                    {end ? (                        
                        <div className="job-content">
                            {content}
                        </div>       
                    ):(
                        <div className="job-content divider">
                            {content}
                        </div>   
                    )}                 
                </div>
            );
        });
        return descArr;
    };

    render(){
        return(
            <div id="container-descriptors">
                {this.returnDescriptors(this.props)}
            </div>
        );
    };
};