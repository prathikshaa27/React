import React,{Component} from 'react';

class Task1 extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"prathi"
        };
    }
     handleClick=()=>{
        this.setState({name:"Mike"})

    }
        render(){
            return(
                <div>
                    <h1>Class</h1>
                    <p onClick={this.handleClick}>Name: {this.state.name}</p>
                </div>
            )
        }
    }
export default Task1;