import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import LifeCycleA from './component/lifeCycleA';
import FragmentDemo from './component/fragmentDemo';
import Table from './component/table';
import PureComp from './component/ParentComp';
import ParentComp from './component/ParentComp';
import RefsDemo from './refsDemo';
import PortalDemo from './component/portalDemo';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/clickCounter';
import HoverCounter from './component/HoverCounter';
import ClickCounterTwo from './clickCounterTwo';
import HoverCounterTwo from './hoverCounterTwo';
import User from './component/User';
import Counter from './component/counter';
import ComponentF from './componentF';
import { UserProvider } from './userContext';


function App() {
  return (
    <div className="App">
    {/* <UserProvider value = "Kavita">
    <ComponentF/>
    </UserProvider> */}
    {/* <Counter render ={(count,clickHandler)=>(
       <ClickCounterTwo count = {count} clickHandler = {clickHandler}/>
       )}

    />
    <Counter render ={(count,clickHandler)=>(
       <HoverCounterTwo count = {count} clickHandler = {clickHandler}/>
       )}
    /> */}
     {/* <ClickCounterTwo/>
     <HoverCounterTwo/>
     <User render = {(isLoggedIn)=>isLoggedIn?'Kavita':'Guests'}/> */}
    {/* <ClickCounter/>
    <HoverCounter/> */}
    <ErrorBoundary>
    <Hero HeroName = 'Superman'/>
    </ErrorBoundary>

    <ErrorBoundary>
    <Hero HeroName = 'Batman'/>
   </ErrorBoundary>

   <ErrorBoundary>
    <Hero HeroName = 'Joker'/>
   </ErrorBoundary>
    {/* <PortalDemo/> */}
    {/* <RefsDemo/> */}
    {/* <ParentComp/> */}
    {/* <LifeCycleA/> */}
    {/* <FragmentDemo/> */}
    {/* <Table/>*/}
    </div>
  );
}

export default App;
