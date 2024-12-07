import React from "react"
import Welcomescreen from "./components/Welcomescreen/Welcomescreen"
import SellerProfileForm from "./components/SellerProfileform/SellerProfileForm";
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Welcomescreen/>}>
        </Route>
        <Route path='/SellerForm' element={<SellerProfileForm/>}>
        </Route>
      </Routes>
    </Router>
    </>
  )
}
export default App
