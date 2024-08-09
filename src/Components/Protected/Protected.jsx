import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    const {Component}=props;
    const {category}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('auth-token');
        if(!login){
            navigate('/login')
        }
    },[])
    return(
        <div>
            <Component category={category}/>
        </div>
    )
}
export default Protected;