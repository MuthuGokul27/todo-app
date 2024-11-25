import { useState } from "react"

interface AddTasksProps {
  tasks: string[]; // The tasks prop should be an array of strings
}

const AddTasks: React.FC<AddTasksProps> = ({tasks}) => {
  const [checkedState, setCheckedState] = useState<boolean[]>(tasks.map(() => false))

  //Handle Checkbox Change

  const handleCheckboxChange = (index:number) =>{
    const updatedCheckedState = [...checkedState]
    updatedCheckedState[index] = !updatedCheckedState[index]
    setCheckedState(updatedCheckedState)

  }
  

  return (
    <div className="flex flex-col items-center justify-center">
    <ul className='flex flex-col items-start  mt-4'>
      {
       tasks.map((task, index) => (
          <li key={index} className="flex items-center  p-2 text-white font-bold">
            <input className="w-5 h-5 cursor-pointer" type="checkbox" checked={checkedState[index]} onChange={() => handleCheckboxChange(index)} />  
            <span className={`px-2 ${checkedState[index] ? 'line-through decoration-black decoration-2' : ''}`}>{task}</span>
          
          </li>
       ))
      }
    </ul>
    </div>
  )
}

export default AddTasks