import React , {Component}from 'react';
import DerievedComponent from './derievedcomponent';

class BaseComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.text}</h1>

            </div>
        );
        }
    }
export default BaseComponent;