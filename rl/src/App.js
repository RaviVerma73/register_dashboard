
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './conponents/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './conponents/Home';
import Register from './conponents/Register';
import Edit from './conponents/Edit';
import Login from './conponents/Login';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes> 
    </>
       
   
  );
}

export default App;
