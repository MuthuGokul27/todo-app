import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddTasks from './Components/AddTasks'
import { useState } from "react";

interface AddTasksProps {
  tasks: string[];
  
}


function App() {
  const [task, addTask] = useState<string>("")
  const [tasks, addTasks] = useState<string[]>([])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
    addTask(event.target.value)

  }
  const addingTask  = (): void =>{
    if(task.trim() !== "") {
      addTasks([...tasks, task])
      addTask('')
    }

  }
  return (
    <div className="bg-gray-800 min-h-screen">
      <header className="h-12 p-2 w-screen">
        <h1 className="text-center text-white font-bold text-4xl">
          Get Things Done!
        </h1>
      </header>
      <main className="flex items-center justify-center mt-8">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          id="inputField"
          className="items-center text-black  font-bold mr-4 justify-center rounded w-96 h-8 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
        ></input>
        <button onClick={addingTask} className="ml-4  p-2 bg-purple-500 text-white text-md rounded-md hover:bg-purple-700">
          Add Task
        </button>
       
      </main>

      <AddTasks tasks= {tasks} />

      <footer>
        <button className="fixed bottom-8 right-8 h-16 w-16 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600" onClick={addingTask}>
          <FontAwesomeIcon
            className="text-white text-2xl"
            icon={faPlus}
          ></FontAwesomeIcon>
        </button>
      </footer>
    </div>
  );
}

export default App;
