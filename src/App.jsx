import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Sliders from "./components/Sliders";
import Sticky from "./components/Sticky";

export default function App() {
  return (


    <div>
      <BrowserRouter>
      <Header/>
      <Section/>
      <Sliders/>
      <Sticky/>

     
      <Routes>
        {/* <Route to = "/section" element = {<Section/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}