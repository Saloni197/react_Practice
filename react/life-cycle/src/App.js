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

function App() {
  return (
    <div className="App">
    <ClickCounter/>
    <HoverCounter/>
    {/* <ErrorBoundary>
    <Hero HeroName = 'Superman'/>
    </ErrorBoundary>

    <ErrorBoundary>
    <Hero HeroName = 'Batman'/>
   </ErrorBoundary>

   <ErrorBoundary>
    <Hero HeroName = 'Joker'/>
   </ErrorBoundary> */}
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
