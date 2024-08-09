import { Link } from 'react-router-dom';
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import insta from '../Assets/instagram.png'
import { useNavigate } from 'react-router-dom';
import './Footer.css'
function Footer(){
    const navigate=useNavigate();
    const subscribe=()=>{
       const token=localStorage.getItem('auth-token');
       if(!token){
           alert("First Login to your account");
           navigate('/login')
           window.scroll(0,0);
       }else{
        navigate('/subscription')
       }
    }
    return(
        <div className="footer">
           <div className="footer-contents">
             <div className="footer-contents-top">
               <p className='footer-contents-top-heading'>The bulletin</p>
               <p  className='footer-contents-top-subheading'>"Stay Informed, Stay Ahead"</p>
             </div>
             <hr/>
             <div className="footer-contents-bottom">
                <div className="footer-contents-bottom-1">
                    <p className='footer-contents-bottom-1-heading'>News</p>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}} to='/all'>All</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}}to='/india'>India</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}}to='/world'>World</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}}to='/education'>Education</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}}to='/business'>business</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}}to='/science'>Science</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}}to='/health'>Health</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}}to='/entertainment'>Entertainment</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}}to='/sports'>Sports</Link>
                    
                    
                </div>
                <div className='footer-contents-bottom-2'>
                    
                <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}} to='/technology'>Tech</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}} to='/politics'>Politics</Link>
                    <Link onClick={()=>{window.scroll(0,0)}}style={{textDecoration:'none', color:'#fff',fontSize:'12px',fontWeight:'400'}} to='/astrology'>astronomy</Link>
                    <p className='footer-contents-bottom-2-heading'>Contact Us</p>
                    <p className='footer-contents-bottom-2-subheading'>0578-879-563</p>
                    <p className='footer-contents-bottom-2-subheading'>B-45 Wing-C,City complex<br/>Cannaught Place,New Delhi</p>
                    <div className="social-links">
                        <img src={facebook}/>
                        <img src={twitter}/>
                        <img src={insta}/>
                    </div>
                </div>
                <div className="footer-contents-bottom-3">
                    <p className='footer-contents-bottom-3-heading'>Get Our Subscription</p>
                    <button onClick={subscribe}>Subscribe</button>
                </div>
             </div>

           </div>
        </div>
    )
}
export default Footer;