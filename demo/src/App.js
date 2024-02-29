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
import {List} from "./RenderingList";
import {Objs} from "./RenderingLists1"
import {Event} from "./Events";
import {Event1} from "./Events";
import {Event2} from './Events';
import { User } from "./FunctionProps";
import {Count} from "./State";
import {Counter} from "./FunctionState";
import {Counter1} from "./FunctionState";
import {Task} from "./hooks";
import { LifecycleComponent } from "./LifecycleComponents";
import { Employee } from "./Employee";
import { Skills } from "./Skills";
import Example1 from "./HooksUseState";
import HuseEffect from "./HooksUseEffect";
import Sample from "./HooksUsexontext";
import {Sample1} from "./HooksUseRef";
import {Forms } from "./forms";
import UncontrolledComponents from "./UncontrolledComponents";
import ControlledComponent from "./ControlledComponent";
import parent from "./parent";
import Main from "./Main";
import Parent1 from "./Parent1";
class App extends Component{
  render(){
    return(
      <div>
        <h1>Sample program</h1>
         {/* <NewComponent/>
        <NewComponent1/>

        <NewComponent2/>
        <Count/>
   */}
      </div>
    );
  }
}

function App1(){
  const LoggedIn=true;
  return(
    <div>
      {/* {/* <Message/>
      <Basic/>
      <Example /> 
      <Greeting LoggedIn={LoggedIn}/>
      <List/>
      <Objs/>
      <Event/>
      <Event1/>
      <Event2 />
      <User name="Prathi"/>
      <User age={22}/>
      <User name="Mike"/>
      <User age={15}/> */}
      {/* <Counter/>
      <Counter1 /> */}
      {/* <Task/>
      <Callback/>
      <LifecycleComponent/> */}
      {/* <Employee name ="Prathi" empid = {111}/> */}
      {/* <Example1/>
      <HuseEffect/>
      <Sample/>

    <Forms/>*/}
      {/* <UncontrolledComponents/> 
      <ControlledComponent/>  */}
      {/* <Main name="John"/>
      <Parent1/> */}
      <Sample1/>


      </div>
      
    
  );
}
export {App1}
export default App;
 