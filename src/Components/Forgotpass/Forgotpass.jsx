import { useState } from "react";
import axios from 'axios'
import './Forgotpass.css'
function Forgotpass(){
    const [email,setEmail]=useState("");
    const handlecontinue=async ()=>{
        console.log(email)
        await axios.post('https://bulletin-backend.onrender.com/forgotpassword',{email:email})
        .then((res)=>{
            console.log(res)
            if(res.data.success===true){
                alert(res.data.message);
            }else{
                alert("Email not registered")
            }
        })
    }
    return(
        <div className="forgotpass">
            <div className="forgotpass-container">
                <h1>Forgot Password</h1>
                <div className="forgotpass-fields">
                   <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter e-mail"/>
                </div>
                <button onClick={handlecontinue}>Continue</button>
            </div>
        </div>
    )
}
export default Forgotpass;