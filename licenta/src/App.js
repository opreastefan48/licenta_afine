import React from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Nav_bar from './Components/Navbar/navigation_bar';
import FormCules from './Components/Tabs/cules/form';
import Fertilizare from './Components/Tabs/fertilizare/table'
import Details from './Components/Tabs/detalii/details'
import Total_cules from './Components/Tabs/total/cules_table'
import Home from './Components/Tabs/home/home'

import "./style.css";

function App() {
  return (
      <Router>
          <Nav_bar />
        <Routes>
            <Route path='/' element={<Home/>}></Route>

            <Route path='/cules' element={<FormCules />}></Route>

            <Route path='/total' element={<Total_cules/>}> </Route>

            <Route path='/fertilizare' element={<Fertilizare/>}> </Route>

            <Route path='/detalii' element={<Details/>}> </Route>

        </Routes>
        


      </Router>

  )

}

export default App;
