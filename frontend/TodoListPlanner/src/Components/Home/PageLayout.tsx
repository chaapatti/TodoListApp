import { Task } from "./Task";
import { useState } from "react";
import { TaskLink } from "./TaskLink";
import todoList from "../../List.json"
import { createContext } from "react";

const listClassification = ["Personal", "Work", "list1"]
export const listContextData = createContext(listClassification);

export function PageLayout() {
    const [taskData, setTaskData] = useState(""); // variable to store the task

    const [taskShow, setTaskShow] = useState(false)
    const handleTask = () => {
        setTaskShow(!taskShow)
    }

    const handleTaskData= (childData: any) => {
        setTaskData(childData);
    }
    return(<>
    <listContextData.Provider value = {listClassification}>
    <div className="flex flex-row justify-center">
        <div className="bg-blue-100 rounded h-[500px]">
        <h1>Title of the page: Today Upcoming.</h1>
        <div>
            All MY todos along with there information.
        </div>
        <div>
            Some Conditional rendering based on the page.
        </div>
        <input type="submit" value="Click me to open Task" onClick={handleTask}></input>
        {todoList.map((task)=> {
            return(<TaskLink key= {task.id}  id={task.id} title= {task.title} clickParam={handleTaskData} openTask={setTaskShow} desc={task.description} status={task.Completed}/>)
        })}
    
        </div>
        <div className="bg-gray-100 border-left p-4">
            {taskShow && <Task taskObject={taskData} setCloseTask = {setTaskShow} />} 
        </div>
    </div>
    </listContextData.Provider>
    </>);
} 