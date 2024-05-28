import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

export default function App() {
  return (


    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route to = "/hastag" element={<h1>djfvjdasvjkfvdsjfb</h1>}/>
      </Routes>
     
      </BrowserRouter>
    </div>
    
  )
}