import logo from './logo.svg';
import './App.css';
import {Greet} from './component/greet.js';
import Welcome from './component/welcome.js';
import Hello from './component/hello'
import Message from './component/message'
import Counter from './component/counter';
import FunctionClick from './component/functionClick';
import ClassClick from './component/classClick';
import EventBinding from './component/EventBind';
import ParentComponent from './component/parentComponent';
import UserGreeting from './component/userGreeting';
import NameList from './component/nameList';
import Stylesheet from './component/Stylesheet';
import Inline from './component/inline';
import './component/appstyle.css'
import style from './component/appstyle.module.css'
import Form from './component/form';
function App() {
  return (
    <div className="App">
    <Form/>
    {/* <h1 className = 'error'>Error</h1>
    <h1 className={style.success}>Success</h1> */}
    {/* <Inline /> */}
    {/* <Stylesheet primary={true}/> */}
    {/* <NameList /> */}
    {/* <UserGreeting /> */}
    {/* <ParentComponent /> */}
    {/* <EventBinding/> */}
   {/* <ClassClick />*/}
   {/* <FunctionClick />*/}
    {/*<Counter />*/}
    {/*<Message />*/}
     {/*<Greet name = 'Kavita' age = '24'>
       <p>This is children props</p>
     </Greet>
     <Greet name = 'Rohin' age = '25'>
       <button>Action</button>
     </Greet>
     <Greet name = 'Aditi' age = '26'/>
      <Welcome  name = 'Kavita' age = '24'></Welcome>
      <Welcome name = 'Rohin' age = '25'></Welcome>
      <Welcome name = 'Aditi' age = '26'></Welcome>*/}
      {/*<Hello />*/}
     {/* <Hello />*/}
      {/*<Hello />*/}
    </div>
  );
}

export default App;
