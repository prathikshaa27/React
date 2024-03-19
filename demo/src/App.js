/*import Demo from "./Demo";
export default function app(){
  return <Demo/>;
}*/
import { Component,useState } from "react";
//import './NewComponent.css';
import './route-react/style.css';
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
 import Table from './usememo';
// import MyForm from "./CustomHooks";
import Sample1 from "./hooksuseref";
//import LoginForm from "./login";
import DidUpdate from "./componentdidupdate";
import AuthenticatedComponent from './authenticateduserprofile'
import InputComponentS from "./allhooks";
import { AuthProvider } from "./allhooks";
import DeleteRequest from "./axios/deleterequest";
import PostDataComponent from "./axios/postdata";
import PutDataComponent from "./axios/putdata";
import DataFetchingComponent from "./axios/getrequest";
import Page from "./page";
import CleanUp from "./hooksuseeffect";
import {Routes,Route} from 'react-router-dom';
import Navbar from '../../demo/src/route-react/navbar';
import Home from './route-react/home';
import About from './route-react/about';
// import Error from './error';
import Products from '../../demo/src/route-react/products';
import OldProducts from '../../demo/src/route-react/oldproducts';
import NewProducts from './route-react/newproducts';
import Users from './route-react/users';
import UserDetails from './route-react/userdetails'
import SampleComponent from '../../demo/src/route-react/newcomponent';
import AnotherComponent from './route-react/anothercomponent';
// import { Provider } from "react-redux";
import UserContainer from "./react-redux-demo/UserContainer";
//import store from "./react-redux-demo/store1";
import { Provider } from "react-redux";
import store from './react-redux-shopping-cart/store';
import Dashboard from './react-redux-shopping-cart/dashboard';
import ProductList from "./react-redux-shopping-cart/productlist";
import ShoppingCart from "./react-redux-shopping-cart/shoppingcart";
//import { BrowserRouter as Routes, Route} from 'react-router-dom';
import Login from './axios/loginformaxios';
import WrapperComponent from "./wrapped";
import LoginForm from "./user authentication/loginform";
import SignUpPage from './user authentication/signuppage';
import CreateNewPortal from "./reviewactions/portals";
import WebComponent from "./reviewactions/webcomponents";



const products = [
  { id: 1, name: 'Handbags', price: 10 },
  { id: 2, name: 'Toys', price: 20 },
  { id: 3, name: 'Stationary items', price: 30 },
];
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
       {/* <E<</h1>xample1/>
      <Sample/> */}

    {/* <Forms/> */}
       {/* <UncontrolledComponents/> 
      <ControlledComponent/>   */}
      {/* <Main name="John"/>
      <Parent1/> */}
       {/* <Sample1/> */}
      
      {/* <ChildComponent getState={getState}/> */}
     {/* <SimpleButton onClick ={handleClick}>Click here</SimpleButton>` */}
       {/* <h1>Inheritance Example</h1> */}
      {/* <DerievedComponent/>  */}
      {/* <Form1/> */}
      {/* <Button count={count} onClick={Click} />
     <Button count={count} onClick={Click} />
       */}
      {/* <CodeSplitting/> */}
      {/* <UserProvider>
      <div>
        <h1>Simple Context Example</RROR in ./src/App.js 120:39-45
export 'Switch' (imported as 'Switch') was not found in 'react-router-dom' (possible exports: AbortedDeferredError, Await, BrowserRouter, Form, HashRouter, Link, MemoryRouter, NavLink, Navigate, NavigationType, Outlet, Route, Router, RouterProvider, Routes, ScrollRestoration, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_FetchersContext, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, UNSAFE_ViewTransitionContext, UNSAFE_useRouteId, UNSAFE_useScrollRestoration, createBrowserRouter, createHashRouter, createMemoryRouter, createPath, createRoutesFromChildren, createRoutesFromElements, createSearchParams, defer, generatePath, isRouteErrorResponse, json, matchPath, matchRoutes, parsePath, redirect, redirectDocument, renderMatches, resolvePath, unstable_HistoryRouter, unstable_usePrompt, unstable_useViewTransitionState, useActionData, useAsyncError, useAsyncValue, useBeforeUnload, useBlocker, useFetcher, useFetchers, useFormAction, useHref, useInRouterContext, useLinkClickHandler, useLoaderData, useLocation, useMatch, useMatches, useNavigate, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRevalidator, useRouteError, useRouteLoaderData, useRoutes, useSearchParams, useSubmit)

webpack compiled with 1 error and 1 warning
h1>
        <LoginForm />
      </div>
    </UserProvider> */}
    
       {/* <MyComponent /> */}
       {/* <LoginForm/> */}
      {/* <MyComponent triggerError={true} />
  //  */} 
    {/* <ErrorBoundary>
    <ErrorProneComponent/>
   </ErrorBoundary> 
   <WrapperComponent/> */}
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
     {/* <LoginFormAxios/>
     <DeleteRequest/>
     <DataFetchingComponent/>
     <PostDataComponent/>
    <PutDataComponent/>*/}
     {/* <Page/>
     <CleanUp/>
     <Lifecycle/>
     <DeleteRequest/> */}
     {/* <LoginComponentAxios/> */}
        {/* <Navbar/> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}>
          <Route path="oldproducts" element={<OldProducts/>}/>
          <Route path="newproducts" element={<NewProducts/>}/>
          </Route>
          <Route path="users" element={<Users/>}/>
          <Route path="users/:UserId" element={<UserDetails />} />
          <Route path="/newcomponent" element={<SampleComponent />} />
          <Route path="/anothercomponnet" element={<AnotherComponent/>}/> */}
         
       {/* <Route exomponentact path="/" element={<LoginFormAxios/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
      </Routes> */}


      {/* <Provider store={store}> 
        <UserContainer/>
      </Provider> */}
      
      {/* <Provider store={store}>
      <div>
        <ProductList products={products} />
        <ShoppingCart />
      </div>
    </Provider>  */}
    {/* <Table/> */}
    <CreateNewPortal/>
    <div className="App">
      <h1>Welcome to our Website</h1>
      {!isLoggedIn ? (
        <SignUpPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
       
    
     
       




      </div>
      
    
  );
}
export {App1}
export default App;
 