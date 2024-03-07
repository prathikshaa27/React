import React from 'react';
import './App.css';
import './style.css'
import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
// import About from './About';

import Error from './error';
import Products from './Products';
import OldProducts from './OldProducts';
import NewProducts from './NewProducts';
import Users from './Users';
import UserDetails from './UserDetails'
const LazyAbout =React.lazy(()=>import ('./About'));

function App(){
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route 
        path='/About' 
        element ={
          <React.Suspense fallback="lOADING...">
            <LazyAbout/>
          </React.Suspense>
        }/>
        <Route path='/Products' element ={<Products/>}>
          <Route index element ={<NewProducts/>}/>
          <Route path ='OldProducts' element = {<OldProducts/>}/>
          <Route path ='NewProducts' element={<NewProducts/>}/>
        </Route>
        <Route path='/Users' element ={<Users/>}/>
        <Route path ='Users/:UserId'  element={<UserDetails/>}/>
        <Route path ='/*' element={<Error/>}/>

      </Routes>
    </div>
  );
}

export default App;