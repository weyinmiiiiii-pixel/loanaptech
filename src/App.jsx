import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Apply from "./Pages/Apply";
function App(){
  return(
    <Router>
      <div className="App">
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/apply" element={<Apply/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;