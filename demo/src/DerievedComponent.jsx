import React from 'react';
import BaseComponent from './BaseComponent';

class DerievedComponent extends BaseComponent{
    render(){
        return(
            <div>
                {super.render()}
                <p>Child component</p>
            </div>
        )
    }
}
export default DerievedComponent;