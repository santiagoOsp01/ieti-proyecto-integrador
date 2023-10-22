import {Header} from "./components/Header"
import { TaskList } from "./components/TaskList";

const taskList = [{"name": "paper arep", "checked":false}, 
{"name": "comer", "checked":false},
{"name": "lab IETI", "checked":true},
{"name": "Dormir", "checked":true}];

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList list={taskList}/>
    </div>
  );
};

export default App
