import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Sliders from "./components/Sliders";

export default function App() {
  return (


    <div>
      <BrowserRouter>
      <Header/>
      <Section/>
      <Sliders/>
      <Routes>
        {/* <Route to = "/section" element = {<Section/>}/> */}
      </Routes>
     
      </BrowserRouter>
    </div>
    
  )
}