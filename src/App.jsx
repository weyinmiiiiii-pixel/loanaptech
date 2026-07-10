import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; import About from "./components/About";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Apply from "./Pages/Apply";
import Footer from "./components/Footer";
import Dashboard from "./Pages/Dashboard";
function App(){
  return(
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
           <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;