/*import Demo from "./Demo";
export default function app(){
  return <Demo/>;
}*/
import { Component,useState } from "react";
//import './NewComponent.css';
import NewComponent from "./sampleclass";
import { NewComponent1 } from "./sampleclass";
import { NewComponent2 } from "./sampleclass";
import {Message} from "./functioncomponent";
import {Basic} from "./NewComponent";
import {Example} from "./DisplayingData";
import {Greeting} from "./conditionalrendering";
import {List} from "./renderinglist";
import {Event} from "./events";
import {Event1} from "./events";
import {Event2} from './events';
import { User } from "./functionprops";
import {Count} from "./state";
import {Counter} from "./functionstate";
import {Counter1} from "./functionstate";
import Lifecycle from "./lifecyclemethods";
// import Example1 from "./HooksUseState";
// import HuseEffect from "./HooksUseEffect";
// import Sample from "./HooksUsexontext";
// import {Sample1} from "./HooksUseRef";
// import {Forms } from "./forms";
import UncontrolledComponents from "./uncontrolledcomponents";
import ControlledComponent from "./controlledcomponent";
import Main from "./main";
import ChildCHelloomponent from "./childcomponent";
import SimpleButton from "./simplebutton";
import DerievedComponent from "./derievedcomponent";
import Button from "./liftingstate";
import CodeSplitting from "./codesplitting";
// import LoginForm from "./LoginForm";
import ErrorBoundary from "./errorboundary";
import ErrorProneComponent from "./errorpronecomponent";
import ParentComponent from "./forwardingrefs";
import Fragments from "./fragments";
import withErrrorBoundary from "./higherordercomponent";
import TestComponentwithErrorBoundary from "./testcomponent";
import {element,result,image,Parent} from "./jsxindepth";
import InputComponent from "./allhooks";
import GreetingComponent from "./greetingcomponent"
import withAuthentication from "./authentication";
import UserComponent from "./usercomponent";
import MyComponent from "./withoutes6";
// import Counter1 from "./UseReducer";
// import Result from "./useMemo";
// import Message from "./UseCallback";
// import Table from './useMemo';
// import MyForm from "./CustomHooks";
import LoginForm from "./login";
import DidUpdate from "./componentdidupdate";
import AuthenticatedComponent from './authenticateduserprofile'
import InputComponentS from "./allhooks";
import { AuthProvider } from "./allhooks";
import LoginFormAxios from "./axios/loginform";
import DeleteRequest from "./axios/deleterequest";
import PostDataComponent from "./postdata copy";
import PutDataComponent from "./axios/putdata";
import DataFetchingComponent from "./axios/getrequest";
import Productlist from "./components/productlist";
import Cart from './components/cart';
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
  // const handleClick=()=>{
  //   alert("Button Clicked");
  // }
  
  
  return(
    
    <div>
      {/* {/* <Mesprathisage/>
      <Basic/Hello>
      <Example /> 
      <Greeting LoggedIn={LoggedIn}/>
      <List/>
      <Event/>
      <Event1/>
      <Event2 />
      <DidUpdate/>
      <User name="Prathi"/>
      <User age={22}/true>
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
       <UncontrolledComponents/> 
      <ControlledComponent/>  
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
      {/* <UserProvider>
      <div>
        <h1>Simple Context Example</h1>
        <LoginForm />
      </div>
    </UserProvider> */}
    
       {/* <MyComponent /> */}
       {/* <LoginForm/> */}
      {/* <MyComponent triggerError={true} />
  //  */} 
    {/* <ErrorBoundary>
    <ErrorProneComponent/>
   </ErrorBoundary>  */}
   {/* <ParentComponent/>
   <Fragments/>
   <TestComponentwithErrorBoundary/>
   {element}
   {result}
   {image}
   {Parent} */}
   {/* <InputComponent/>
   <GreetingComponent/> 
   {/* <FormComponent/> */}
   {/* <WithAuthentication/>
   <AuthenticatedUserComponent user ={{Name:"prathi", email:"prathi@gmail.com"}}/>
   <MyComponent/> */}
   {/* <useCounter/> */}
   {/* <Counter1/> */}
   {/* <Result/>
   <Message/>
   <ToggleComponent/> */}
   {/* <MyForm/>
   <Table/> */}
    {/* <ParentComponent/>
    <GreetingComponent/>  */}
    {/* <DidUpdate/>
     <TestComponentwithErrorBoundary/> */}
     {/* <AuthenticatedComponent /> */}
     <LoginFormAxios/>
     <DeleteRequest/>
     <DataFetchingComponent/>
     <PostDataComponent/>
     <PutDataComponent/>
     <Productlist/>
     <Cart/>
   
 
   



      </div>
      
    
  );
}
export {App1}
export default App;
 