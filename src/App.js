import { BrowserRouter,Route,Routes} from "react-router-dom";
import Register from "./components/auth/Register"
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import Reservation from "./components/home/Reservation";
import Contact from "./components/home/Contact";
import Profile from "./components/home/Profile";
function App() {
  return (<>
  <BrowserRouter>
  <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/reservation" element={<Reservation/>}/>
  </Routes>
  </BrowserRouter>
  </>);
}

export default App;
