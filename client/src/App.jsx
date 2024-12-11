import React from "react"
import Welcomescreen from "./components/Welcomescreen/Welcomescreen"
import SellerProfileForm from "./components/SellerProfileform/SellerProfileForm";
import AccountDetail from "./components/SellerProfileform/AccountDetail";
import './index.css'
import {
  createBrowserRouter,
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
        <Route path='/SellerForm' element={<SellerProfileForm/>} >
        </Route>
        <Route path='/SellerForm/Accountdetail' element={<AccountDetail/>}>
        </Route>
      </Routes>
    </Router>
    </>
  )
}
export default App
