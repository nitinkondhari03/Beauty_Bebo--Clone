import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Clinick_plus from "./clinick_plus"
import Clinick_plus1 from "./clinick_plus1"
import Clinick_plus2 from "./clinick_plus2"
import Registeration from './AllUsersPage'
import Login from "./Login";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/Registeration/Login" element={<Login/>} />
      <Route path="/clinick_plus" element={<Clinick_plus/>} />
      <Route path="/clinick_plus1" element={<Clinick_plus1/>} />
      <Route path="/clinick_plus2" element={<Clinick_plus2/>} />
      <Route path="/Registeration" element={<Registeration/>} />
    </Routes>
  );
}
// :id

export default AllRoutes;
