import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Partners from "./pages/partners";
import MenuState from "./store/menuContext";
import { useState } from "react";
import NoPage from "./pages/Nopage";


function App() {
  const [menu,setmenu] = useState(false);
  return (
      <>
      <MenuState.Provider value={{menu,setmenu}}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/partners" element={<Partners/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </MenuState.Provider>
      </>
  )
}

export default App;
