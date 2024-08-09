import { useState, useEffect } from "react"
import './Subscribe.css'
import { useNavigate } from "react-router-dom";

function Subscribe(){
    const navigate=useNavigate();
    const [data,setData]=useState({
        name:"",
        email:"",
        phone:"",

    })
    useEffect(()=>{
        let login=localStorage.getItem('auth-token');
        if(!login){
            navigate('/login')
        }
    },[])
    const ChangeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const payment = () => {
       
        const { name, email, phone } = data;
        if (!name ||  !email || !phone) {
            alert("All fields are required");
        } else {
            if(phone.length<10){
                alert("Mobile number must be of 10 digits")
            }
            else{alert("Congrats! You are Subscribed");
                navigate('/all');
            }
        }
    };
    return(

            <div className="subscribe">
                <div className="subscribe-container">
                    <h1>Subscription Form</h1>
                 <div className="subscribe-fields">

                <input type="text" value={data.name} onChange={ChangeHandler} name="name" placeholder="Enter name"/>
                <input type="text" value={data.email} onChange={ChangeHandler} name="email" placeholder="Enter e-mail"/>
                <input type="text" value={data.phone} onChange={ChangeHandler} name="phone" placeholder="Enter Phone"/>
            
                 </div>
                 <button onClick={payment}>PROCEED TO PAY <span>$12</span></button>
                    
                </div>
            </div>
        )

}
export default Subscribe