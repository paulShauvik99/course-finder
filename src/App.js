import React from 'react'
import Home2 from './Components/Home2';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import About from './Components/About';



function App() {
    return (
      
      <Provider store={store} >
        <div className="App">
          <Navbar />
          <div className="main_content">
            <Routes> 
              <Route exact path='/' element={<Home2 />} />       
              <Route exact path='/courses' element={<Courses />} />       
              <Route exact path='/about' element={<About />} />       
            </Routes> 
          </div>
          <Footer />        
        </div>
      </Provider>

    );
}

export default App;
