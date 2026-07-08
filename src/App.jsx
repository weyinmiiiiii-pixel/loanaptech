import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; import About from "./components/About";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Apply from "./Pages/Apply";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
        {/*<Route path="/loan-status" element={<LoanStatus/>}/> */}
       {/*<Route path="/loans" element={<Loans/>}/> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;