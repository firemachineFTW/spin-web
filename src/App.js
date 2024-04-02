import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home"
import MisionVision from "./routes/MisionVision";
import Services from "./routes/Services";
import Contact from "./routes/Contact";



function App() {
  return (
      <>
        <div className="container">
        <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/MisionVision" element={<MisionVision />}/>
            <Route path="/Services" element={<Services />}/>
            <Route path="/Contact" element={<Contact />}/>
          </Routes>
        </div>
      </>
  );
}

export default App;
