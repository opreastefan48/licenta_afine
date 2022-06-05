import React, { useEffect } from 'react'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Nav_bar from './Components/Navbar/navigation_bar';
import FormCules from './Components/Tabs/cules/form';
import Fertilizare from './Components/Tabs/fertilizare/table'
import Probleme from './Components/Tabs/probleme/probleme'
import Total_cules from './Components/Tabs/total/cules_table'
import Home from './Components/Tabs/home/home'
import "./style.css";
import Login from './Components/Tabs/login/login';

function App() {
  useEffect(() => {
    document.title = "Licenta Oprea Stefan"
  }, [])
  return (
    <Router>
        <Nav_bar />
      <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/cules' element={<FormCules />}/>

          <Route path='/total' element={<Total_cules/>}/>

          <Route path='/fertilizare' element={<Fertilizare/>}/>

          <Route path='/probleme' element={<Probleme/>}/>

          <Route path='/login' element={<Login/>}/>

      </Routes>
    </Router>

  )

}

export default App;
