import logo from './logo.svg';
import './App.css';
import{ BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './Components/Navbar';
import Home1 from './Pages/Home1';
import Singlerecipe from './Pages/Singlerecipe';





function App() {
 
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home1 />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Signup' element={<Signup />}/>

      <Route path='/Singlerecipe' element={<Singlerecipe/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
