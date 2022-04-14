import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Homepage/Home'
import Login from './Components/Loginpage/Login'
import Register from './Components/Registerpage/Register'
import Urllist from './Components/Urllist/Urllist';
import Header from './Components/Header/Header';
import Main from './Components/Mainpage/Main';
import Passwordforgot from './Components/Passwordupdate/Passwordforgot';
import Firstpage from './Components/Firstpage/Firstpage';


function App() {
  return (
  
    <BrowserRouter>
   
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
   <Route path="/list" element={<Urllist />} />
   <Route path="/header" element={<Header />} />
   <Route path="/main" element={<Main />} />
   <Route path="/passwordupdate" element={<Passwordforgot />} />
   <Route path="/firstpage" element={<Firstpage />} />


 

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
