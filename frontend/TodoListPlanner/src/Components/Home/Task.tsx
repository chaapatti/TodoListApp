import { Dispatch, SetStateAction } from "react"



export function Task({setCloseTask}: any) {
    const handleClose =() => {
        setCloseTask(false)
    }
    return(<>
    <div>
        <h2>Title of the task</h2>
        <p>Description</p>
        <label>List</label> 
        <input type="text" placeholder="Enter your name"></input>
        <button onClick= {handleClose}>close</button>
        
    </div>
    </>)
}
// function to immplement when we click at a page it opens
// task component.
/* Till now we onlY did the part where it only changes to a new page or route. 
So we click on abutton and a page opens on the side but also readjust all the other components to change the dimensions or positions.

*/