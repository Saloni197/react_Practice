import React from 'react'
import './App.css';
import ClassCounter from './components/classCounter';
import HookCountTwo from './components/HookCountTwo';
import HookCounter from './components/HookCounter';
import HookCountThree from './components/HookCountThree';
import HookCounterEffect from './components/HookCounterEffect';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFatching from './components/DataFatching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFatchingTwo from './components/DataFatchingTwo';
import DataFatchReducer from './components/DataFatchReducer';
import CounterMemo from './components/CounterMemo';
import FocusRefHook from './components/FocusRefHook';
import HookRefTimer from './components/HookRefTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
     {/* <ClassCounter/> */}
     {/* <HookCounter/> */}
     {/* <HookCountTwo/> */}
     {/* <HookCountThree/> */}
     {/* <HookCounterEffect/> */}
     {/* <HookMouse/> */}
     {/* <MouseContainer/> */}
     {/* <IntervalHookCounter/> */}
     {/* <DataFatching/> */}
     
     {/* <UserContext.Provider value = {'Kavita'}>
     <ChannelContext.Provider value = {'Youtube'}>
     <ComponentC/>
     </ChannelContext.Provider>
     </UserContext.Provider> */}

     {/* <CounterOne/> */}
     {/* <CounterTwo/> */}
     {/* <CounterThree/> */}
     {/* <DataFatchingTwo/> */}
     {/* <DataFatchReducer/> */}
     {/* <CounterMemo/> */}
     {/* <FocusRefHook/> */}
     {/* <HookRefTimer/> */}
     <DocTitleOne/>
     <DocTitleTwo/>
    </div>
  );
}

export default App;
