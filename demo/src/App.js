/*import Demo from "./Demo";
export default function app(){
  return <Demo/>;
}*/
import { Component } from "react";
import NewComponent from "./SampleClass";
import { NewComponent1 } from "./SampleClass";
import { NewComponent2 } from "./SampleClass";
import {Message} from "./FunctionComponent";
class App extends Component{
  render(){
    return(
      <div>
        <h1>Sample program</h1>
        <NewComponent/>
        <NewComponent1/>
      </div>
    );
  }
}

const App1 = ()=>{
  return(
    <div>
      <h1>hello</h1>
      <Message/>
    </div>
  );
  }
export default App;

 export {App1};
  

