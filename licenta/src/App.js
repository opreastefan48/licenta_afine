import React from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Nav_bar from './Components/Navbar/navigation_bar';
import Cules from './Components/Tabs/cules/cules_table';
import Fertilizare from './Components/Tabs/fertilizare/table'
import Details from './Components/Tabs/detalii/details'
import Test from './Components/Tabs/testing/test'

function App() {
  return (
      <Router>
          <Nav_bar />
        <Routes>
            <Route path='/'></Route>

            <Route path='/cules' element={<Cules />}></Route>

            <Route path='/fertilizare' element={<Fertilizare/>}> </Route>

            <Route path='/detalii' element={<Details/>}> </Route>

            <Route path='/test' element={<Test/>}> </Route>

        </Routes>
        


      </Router>

  )

}

export default App;
