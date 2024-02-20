import React, { Component } from "react";
class NewComponent extends Component{
    render(){
        return(
            <div>
            <h1>Hello</h1>
            <p>Sample class Program</p>
            </div>
        );
    }
}

export default NewComponent;


class NewComponent1 extends Component{
    render(){
        return(
            <div>
            <h1>Hello</h1>
            <p>Sample class Program</p>
            </div>
            
        );
    }
}
export {NewComponent1};

class NewComponent2 extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Hello This is Prathi"
        };
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
export {NewComponent2}
