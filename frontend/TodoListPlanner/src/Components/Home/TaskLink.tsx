import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { useEffect, useRef, useState } from "react";
import { set } from "react-hook-form";
interface Inputs {
    title: string
}

export function TaskLink({id, title, clickParam, desc, openTask, status}: any) {
   const labelRef = useRef();
   const [inputValue, setInputValue] = useState({});
   const [a, setA] = useState(status)
  //https://marek-rozmus.medium.com/styling-checkbox-with-tailwind-46a92c157e2d  
// In the below example we have an input which renders a component from fontsicons
// based on the condition if id.checked is true then we render that component.
useEffect( ()=> {
    
    const handleClick =(event: any)=>{
        if (labelRef.current.contains(event.target))
        { 
            setA(!a)
    }
}
    document.addEventListener("mousedown", handleClick)
    return (()=>{
        document.removeEventListener("mousedown", handleClick)
    })

},[a])

const handleSubmit = () => {
    setInputValue({
        id,
        title,
        desc

    })
    
    clickParam(inputValue)
    openTask(true)
    
    // after setting this up how will my page render the right information.
}
    return(<>
    
    <div className="text-center p-2 border-b text-gray-500 font-semibold hover:bg-gray-300 hover:text-white rounded " 
    onClick={handleSubmit}>
        <div className="flex justify-between items-center">
            <div >
            <label ref={labelRef}  htmlFor={id} className="cursor-pointer relative">

            <input className="appearance-none border accent-pink-100 w-3 h-3 border-gray-300 rounded text-blue-100" type="checkbox" id={id}></input>
            <FontAwesomeIcon className={`absolute text-gray-600 left-0 top-0 text-2xl h-4 w-4 text-opacity-0 transition ${a? "text-opacity-100" :"text-opacity-0"} `} icon={faCheck}/>
            </label>
            <span className="text-center text-xs px-2">{title}</span>
            </div>
            <div className="">

            <FontAwesomeIcon icon={faChevronRight} />
            </div>
            </div>
    </div>
    
    
    
    
    
    
    </>);

}