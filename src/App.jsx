import React from 'react';

import Home from './assets/components/home';
import Projects from './assets/components/projects';
import Project_Info from './assets/components/project_info';
import Journey from './assets/components/journey';
import Resume from './assets/components/resume';


import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />}>
            <Route path=':id' element={<Project_Info />}/>
          </Route>
          <Route path='/journey' element={<Journey />}/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
    </Router>  
    </>
  )
}

export default App;