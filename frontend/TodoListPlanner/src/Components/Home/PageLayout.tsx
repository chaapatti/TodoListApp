import { Task } from "./Task";
import { useState } from "react";

export function PageLayout() {
    const [taskShow, setTaskShow] = useState(false)
    const handleTask = () => {
        setTaskShow(!taskShow)
    }
    return(<>
    <div className="flex flex-row justify-center">
        <div className="bg-blue-100 rounded h-screen">
        <h1>Title of the page: Today Upcoming.</h1>
        <div>
            All MY todos along with there information.
        </div>
        <div>
            Some Conditional rendering based on the page.
        </div>
        <input type="submit" value="Click me to open Task" onClick={handleTask}></input>
        </div>
        <div className="bg-gray-200 border-left">
            {taskShow && <Task setCloseTask = {setTaskShow} />} 
        </div>
    </div>
    </>);
}