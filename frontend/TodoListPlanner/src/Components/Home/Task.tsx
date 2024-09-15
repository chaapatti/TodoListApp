import { Dispatch, SetStateAction } from "react"
import { DropDown } from "./DropDown"
import { TaskLink } from "./TaskLink"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export function Task({taskObject,setCloseTask}: any) {
    const handleClose =() => {
        setCloseTask(false)
    }
    return(<>
    <div className="w-max px-5 rounded-md bg-gray-200 h-screen">
        <div className="flex flex-row justify-between items-center">
            <h1 className=" text-xl font-bold text-gray-700 border rounded mt-2 ">Task:</h1>
            <FontAwesomeIcon icon={faCircleXmark} className="" onClick= {handleClose}>close</FontAwesomeIcon>
            
        </div>
            <div className="h-[150px] mt-4">
                <h2 className="text-gray-400 text-sm border border-white rounded-md p-1 mb-2">{taskObject.title}</h2>
                <div className="border-2 border-white w-full h-full rounded-md  ">
                    <h2 className="text-black p-2 font-semibold">Description:</h2>
                    <p className="text-wrap p-2">{taskObject.desc}</p>

                </div>
            </div>

            <div>
            <div className="flex space-x-5 mt-2 text-gray-500 text-sm">

                <label>List</label> 
                <div>
                <DropDown /> 
                </div>
            </div>
        <label className="text-gray-500 text-sm">Tags</label>
        </div>
        <h1 className="text-gray-500 text-sm">SubTasks:</h1>
        <div>
            <TaskLink title="hello"/>
        </div>
        
        <div className="flex justify-between p-2">
        <button className="btn" onClick= {handleClose}>Delete Task</button>
        <button className="btn bg-blue-300" onClick= {handleClose}>Save Changes</button>
        </div>
        
    </div>
    </>)
}
// function to immplement when we click at a page it opens
// task component.
/* Till now we onlY did the part where it only changes to a new page or route. 
So we click on abutton and a page opens on the side but also readjust all the other components to change the dimensions or positions.

*/