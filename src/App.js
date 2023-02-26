import { BrowserRouter,Route,Routes} from "react-router-dom";
import Register from "./components/auth/Register"
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import Reservation from "./components/home/Reservation";
import Contact from "./components/home/Contact";
import Profile from "./components/home/Profile";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  return (<>
  
  <BrowserRouter>
  <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route element={<ProtectedRoutes/>}>
    <Route path="/home" element={<Home/>}>
      <Route path="profile" element={<Profile/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="reservation" element={<Reservation/>}/>
    </Route>
    </Route>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>

  </>);
}

export default App;
