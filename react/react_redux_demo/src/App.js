import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/cakes/store';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
     <CakeContainer/>
     <HookCakeContainer/>
     <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
