import { Task } from "./Task";
import { useState } from "react";
import { TaskLink } from "./TaskLink";
import todoList from "../../List.json"
import { createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { InputComponent } from "../Extras/InputComponent";
// We have to do everything locally because we don't have the database setup yet but in future we can change this and make pull 
// request from the database.
const listClassification = ["Personal", "Work", "list1"]
export const listContextData = createContext(listClassification);
var IDUPDATE = 5;

export function PageLayout() {
    const [taskData, setTaskData] = useState(""); // variable to store the task
    const [mytodoList, setmyTodoList] = useState(todoList);
    const [taskShow, setTaskShow] = useState(false)
    const handleTask = () => {
        setTaskShow(!taskShow)
    }
    console.log(mytodoList)
    const handleTaskData= (childData: any) => {
        setTaskData(childData);
    }

    const appendTodoList = (taskTitle: any)=> {
        setmyTodoList([...mytodoList,{id: IDUPDATE++, title: taskTitle, description:"", Completed: false}])
    }
    return(<>
    <listContextData.Provider value = {listClassification}>
    <div className="flex flex-row p-4">
        <div className="px-10 pt-5 text-xl mt-2">
            <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="rounded h-[800px] p-4 overflow-y-scroll w-full">
        <h1 className="font-bold text-5xl pb-6" >Today</h1>
        <span className="border rounded-md font-bold p-2">5</span>
        
        <div className="border rounded-lg p-3"><InputComponent sendNewTask={appendTodoList} /></div>
        {/* <input type="submit" value="Click me to open Task" onClick={handleTask}></input> */}
        {mytodoList.map((task)=> {
            return(<TaskLink key= {task.id}  id={task.id} title= {task.title} clickParam={handleTaskData} openTask={setTaskShow} desc={task.description} status={task.Completed}/>)
        })}
    
        </div>
        <div className="bg-gray-100 border-left">
            {taskShow && <Task taskObject={taskData} setCloseTask = {setTaskShow} />} 
        </div>

       
    </div>
    </listContextData.Provider>
    </>);
} 