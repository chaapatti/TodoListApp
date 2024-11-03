import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSignup = async ()=> {
        const response = await axios.post("http//localhost:3000/signup",{
            username,
            password
        })
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard")
    }
    return(<>
    <div className="p-5">
        <div className="h-[300px] w-[300px] bg-gray-300">
            <input type="text" placeholder="username" value={username} onChange={e=>{setUsername(e.target.value)}}></input>
            <input type="text" placeholder="password" value = {password} onChange={e => {setPassword(e.target.value)}}></input>
            <button onClick={handleSignup}>Sign up</button>
        </div>
    </div>
    
    
    </>);
}