import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/container/contact_list';
//import Greeting from './components/pure/greeting';
//import GreetinF from './components/pure/greetinF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Martin"></Greeting>  */}
        {/* <GreetinF name="Martin"></GreetinF> */}
        <TaskListComponent></TaskListComponent>
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
