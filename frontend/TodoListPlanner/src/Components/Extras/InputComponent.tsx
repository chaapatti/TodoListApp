import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export function InputComponent({sendNewTask}) {
    const inputRef = useRef("");
    const [taskTitle, setTaskTitle] = useState("");

    useEffect(()=> {
        const handleEnterClick = (event: any)=> {
            if(event.key == "Enter")
            {
                sendNewTask(taskTitle)
            }
        }

       inputRef.current.addEventListener("keypress", handleEnterClick);
        return (()=> {
            inputRef.current.removeEventListener("keypress", handleEnterClick)
        })
    }, [taskTitle])


    return(<>
    <div className="flex space-x-2">
    <FontAwesomeIcon icon={faPlus} />
    <input type="text" ref={inputRef} className=" border-none focus:outline-none" placeholder="start typing here" value={taskTitle}
    onChange={(e)=> setTaskTitle(e.target.value)}></input>

    </div>

    </>);
}


// TO create a task by just start typing the data and then move it to the task list as soon as we finish entering the task and 
// hit enter or press outside of the box. when this happens there is a new task created in the database with the title
// we mentioned in the input box and then it should render on the tasks we have.
// similar functionality will be implemented for all other tasks such as upcoming next week and today.
// react is all that is displaying the values.