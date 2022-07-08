import React from 'react'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Chart from './Components/Chart';
import {Provider} from 'react-redux'
import store from './Redux/store'


function App() {
    return (
      
      <Provider store={store}>
        <div className="App">
          <Navbar />
          {/* <Home /> */}
          <Routes> 
            <Route exact path='/' element={<Home />} />       
            <Route exact path='/chart' element={<Chart />} />       
          </Routes> 
        </div>
      </Provider>
    );
}

export default App;
