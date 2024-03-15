import React from 'react';
import BaseComponent from './basecomponent';

class DerievedComponent extends BaseComponent{
    render(){
        return(
            <div>
                {super.render()}
                <p>This is the Child component</p>
            </div>
        )
    }
}
export default DerievedComponent;