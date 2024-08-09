import './Navbar.css'
import menu from '../Assets/menu-icon.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar(){
    const [isOpen, setIsOpen]=useState(false)
    const navigate=useNavigate();
    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
    return(
        <header>
        <div className="container">
             <nav>
                <div className="logo">
                <Link to='/' style={{textDecoration:'none'}}><p>The Bulletin</p></Link>
                </div>
                <ul className={isOpen ? "nav-link active":"nav-link"}>
                    <li><Link style={{textDecoration:'none'}} to='/'>Home</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/all'>All</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/india' >India</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/world' >World</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/education' >Education</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/business' >Business</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/science' >Science</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/heath' >Health</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/entertainment' >Entertainment</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/sports' >Sports</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/technology' >Technology</Link></li>
                    <li><Link style={{textDecoration:'none'}} to='/astrology' >Astrology</Link></li>
                </ul>
                <div className='login'>
                { localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');navigate('/login')}}>Logout</button>:<button onClick={()=>navigate('/login')}>Login</button>}
                </div>
                <div className="icon" onClick={toggleMenu}>
                    <img src={menu}/>
                </div>
             </nav>
        </div>
        </header>
    )
}
export default Navbar;