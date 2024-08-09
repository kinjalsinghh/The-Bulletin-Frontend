import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GetAll from './Components/GetAll/GetAll';
import GetCategoryNews from './Components/GetCategoryNews/GetCategoryNews';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Forgotpass from './Components/Forgotpass/Forgotpass';
import Resetpass from './Components/Resetpass/Resetpass';
import Home from './Components/Home/Home';
import Protected from './Components/Protected/Protected';
import Subscribe from './Components/Subscribe/Subscribe';
function App() {
  return (
    <div>
      
       <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/subscription' element={<Subscribe/>}/>
            <Route path='/forgotpassword' element={<Forgotpass/>}/>
            <Route path='/resetpassword/:id/:token' element={<Resetpass/>}/>
            <Route path='/all' element={<GetAll/>}/>
            <Route path='/india' element={<Protected category='india' Component={GetCategoryNews}/>}/>
            <Route path='/world' element={<Protected category='world' Component={GetCategoryNews}/>}/>
            <Route path='/education' element={<Protected category='education' Component={GetCategoryNews}/>}/>
            <Route path='/business' element={<Protected category='business' Component={GetCategoryNews}/>}/>
            <Route path='/science' element={<Protected category='science' Component={GetCategoryNews}/>}/>
            <Route path='/health' element={<Protected category='health' Component={GetCategoryNews}/>}/>
            <Route path='/entertainment' element={<Protected category='entertainment' Component={GetCategoryNews}/>}/>
            <Route path='/sports' element={<Protected category='sports' Component={GetCategoryNews}/>}/>
            <Route path='/politics' element={<Protected category='politics' Component={GetCategoryNews}/>}/>
            <Route path='/astrology' element={<Protected category='astrology' Component={GetCategoryNews}/>}/>
          </Routes>
          <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
