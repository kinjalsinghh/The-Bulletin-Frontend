import './Home.css'
import image from '../Assets/home-bg1.png'
import { useNavigate } from 'react-router-dom';
function Home(){
    const navigate=useNavigate()
    return(
        <div className="home">
           <div className="home-contents">
            <h2>Stay Informed, Stay Ahead</h2>
            <p>Stay ahead of the curve with <span>The Bulletin</span>, your go-to source for reliable,<br/> up-to-the-minute news and in-depth analysis.</p>
            <div className='home-buttons'>
            <button onClick={()=>navigate('/login')} className='button1'>Get Started</button>
            <button onClick={()=>navigate('/subscription')} className='button2'>Subscribe</button>
            </div>
            
           </div>
           <div className="home-image">
            <img src={image}/>
           </div>
        </div>
    )
}
export default Home;