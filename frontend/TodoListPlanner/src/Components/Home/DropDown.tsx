
import { listContextData } from "./PageLayout";
import { useContext } from "react";
export function DropDown() {
  const listData = useContext(listContextData);
  console.log(listData)
    return(
        <div className="dropdown">
  <div tabIndex={0} role="button" className=" w-[50px] h-[20px] border bg-blue-200 items-center rounded flex justify-center">List</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    {listData.map((data)=> {
      return <li><a>{data}</a></li>})}
    
  </ul>
</div>
    );
}