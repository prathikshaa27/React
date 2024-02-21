/*import Demo from "./Demo";
export default function app(){
  return <Demo/>;
}*/
import { Component } from "react";
import './NewComponent.css';
import NewComponent from "./SampleClass";
import { NewComponent1 } from "./SampleClass";
import { NewComponent2 } from "./SampleClass";
import {Message} from "./FunctionComponent";
import {Basic} from "./NewComponent";
import {Example} from "./DisplayingData";
import {Greeting} from "./ConditionalRendering";
class App extends Component{
  render(){
    return(
      <div>
        <h1>Sample program</h1>
        <NewComponent/>
        <NewComponent1/>
        <NewComponent2/>
  
      </div>
    );
  }
}

function App1(){
  const LoggedIn=true;
  return(
    <div>
      <Message/>
      <Basic/>
      <Example /> 
      <Greeting LoggedIn={LoggedIn}/>
      
    </div>
  )
}
export {App1}
export default App;
 