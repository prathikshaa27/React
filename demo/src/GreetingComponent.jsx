import React , {Component}from "react"
class GreetingComponent extends Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
  
    render() {
      return <div ref={this.myRef}>This is Ref!</div>;
    }
  }
  
  
export default GreetingComponent;