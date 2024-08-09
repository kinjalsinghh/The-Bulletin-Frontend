import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react";
import './LoginSignup.css'
function LoginSignup(){
    const [state,setState]=useState('Login');
    const navigate=useNavigate();
    const [data, setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const userLogin=async ()=>{
       console.log("Logged In",data)
       let response;
       await axios.post('https://bulletin-backend.onrender.com/login',data)
       .then((res)=>{
        response=res.data;
       })
       if(response.success){
        localStorage.setItem('auth-token',response.token)
        navigate("/home")
       }else{
        alert(response.error)
       }

    }
    const userSignUp=async ()=>{
       console.log("Signed Up",data)
       let response;
       await axios.post('https://bulletin-backend.onrender.com/signup',data)
       .then((res)=>{
        response=res.data;
       })
       if(response.success){
        localStorage.setItem('auth-token',response.token)
        navigate("/home")
       }else{
        alert(response.error)
       }
    }
    const ChangeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
            {state==='Sign Up'?<input type="text" onChange={ChangeHandler} value={data.name} name="name" placeholder="Enter Name"/>:<></>}
            <input type="text" value={data.email} onChange={ChangeHandler} name="email" placeholder="Enter e-mail"/>
            <input type="text" value={data.password} onChange={ChangeHandler} name="password" placeholder="Enter password"/>    
                </div>
                <button onClick={()=>{state==='Login'?userLogin():userSignUp()}}>Continue</button>
             <div className="login-signup-forgot">
             {state==='Sign Up'?<p className="loginsignup-login">Already have an account?<span onClick={()=>setState('Login')}> Login</span></p>:<p className="loginsignup-login">Create an account?<span onClick={()=>setState('Sign Up')}> SignUp</span></p>}   
             {state==='Login'?<Link style={{textDecoration:'none'}} to='/forgotpassword' className='forgot-password'>Forgot password?</Link>:<></>} 
             </div> 
            </div>
        </div>
    )
}
export default LoginSignup