/*import Demo from "./Demo";
export default function app(){
  return <Demo/>;
}*/
import { Component,useState } from "react";
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
import { LifecycleComponent } from "./LifecycleComponents";
import { Employee } from "./Employee";
import { Skills } from "./Skills";
// import Example1 from "./HooksUseState";
// import HuseEffect from "./HooksUseEffect";
// import Sample from "./HooksUsexontext";
// import {Sample1} from "./HooksUseRef";
// import {Forms } from "./forms";
import UncontrolledComponents from "./UncontrolledComponents";
import ControlledComponent from "./ControlledComponent";
import parent from "./parent";
import Main from "./Main";
import Parent1 from "./Parent1";
import ChildCHelloomponent from "./ChildComponent";
import SimpleButton from "./SimpleButton";
import DerievedComponent from "./DerievedComponent";
import Form1 from "./Form1";
import {Example1,HuseEffect,Sample,Sample1} from "./Hooks";
import Button from "./LiftingState";
import CodeSplitting from "./CodeSplitting";
import LoginForm from "./LoginForm";
import {UserProvider} from './context';
class App extends Component{
  render(){
    return(
      <div>
        {/* <h1>Sample program</h1> */}
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
  // function handleClick(){
  //   console.log('Clicked the button')
  // }
  // const [count, setCount] = useState(0);  
  // function Click() {
  //   setCount(count + 1)
  // }
  
  return(
    
    <div>
      {/* {/* <Message/>
      <Basic/Hello>
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
      <Sample/> */}

    {/* <Forms/> */}
      {/* <UncontrolledComponents/> 
      <ControlledComponent/>  */}
      {/* <Main name="John"/>
      <Parent1/> */}
      {/* <Sample1/> */}
      
      {/* <ChildComponent getState={getState}/> */}
     {/* <SimpleButton onClick ={handleClick}>Click here</SimpleButton>` */}
      {/* <h1>Inheritance Example</h1>
      <DerievedComponent text ="Hello"/> */}
      {/* <Form1/> */}
      {/* <Button count={count} onClick={Click} />
     <Button count={count} onClick={Click} />
       */}
      {/* <CodeSplitting/> */}
      <UserProvider>
      <div>
        <h1>Simple Context Example</h1>
        <LoginForm />
      </div>
    </UserProvider>



      </div>
      
    
  );
}
export {App1}
export default App;
 