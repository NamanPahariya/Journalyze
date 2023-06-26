import './App.css';
import Home from './Routing/home';
import Contact from './Routing/contact';
import About from './Routing/about';

import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <nav className="bar">
      <div>
      <img src="newsimage.png" alt="" className='front'></img></div>
      <div>
      <Link to='/' className="text">Home</Link>
      <Link to='/about'className="text">About</Link>
      <Link to='/contact' className="text">Contact</Link></div>
     </nav>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>

      </Routes>

      </BrowserRouter>
      {/* <Home/>
      <Contact/>
    <About/> */}
   
    </div>

  );
}

export default App;
