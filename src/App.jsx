
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Layout from "./Layout/Layout";
import { ToggleButton } from "./Components/ToggleButton";



function App() {
  return (
      <div className="App">             

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element= {<Contact/>}/>            
              <Route path="/dentist/:id" element= {<Detail/>}/>                        
              <Route path="/favs" element= {<Favs/>}/>
              <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
            </Route>
          </Routes>
         
      </div>
  );
}

export default App;
