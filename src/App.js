import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Sign up/Signup";
import Login from "./Pages/Log in/Login";
import Main from "./Pages/Main/Main";
 

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/Signup" element={<SignUp/>} /> 
        <Route path="/Main" element={<Main/>} /> 
        <Route path="/login" element={<Login/>} /> 
      </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
