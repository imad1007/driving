import { BrowserRouter,Route,Routes} from "react-router-dom";
import Register from "./components/auth/Register"
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import Reservation from "./components/home/Reservation";
import Historique_Reservation from "./components/home/Historique_Reservation";
import Contact from "./components/home/Contact";
import Profile from "./components/home/Profile";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Test from "./components/home/test";
import HomeContent from "./components/home/HomeContent";
import Inscription from "./components/home/Inscription";
import Index from "./components/Index";

function App() {
  // window.onbeforeunload = function() {
  //   localStorage.clear();
  // };
  return (<>
  
  <BrowserRouter>
  <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/" element={<Index/>}/>
    <Route element={<ProtectedRoutes/>}>
    <Route path="/home" element={<Home/>}>
      <Route path="user" element={<HomeContent/>}/>
      <Route path="inscription" element={<Inscription/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="reservation" element={<Reservation/>}/>
      <Route path="reservation/historique_Reservation" element={<Historique_Reservation/>}/>
    </Route>
    </Route>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>

  </>);
}

export default App;
