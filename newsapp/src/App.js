import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  let pageSize = 6;
  
  const [progress,setProgresss] = useState(0);

  const setProgress = (progress)=>{
    setProgresss(progress)
  }

   const apiKey =  "38f8c30cb0b142a092f8c4c7356baba3";
    return (
      <div>
      <Router>
      <LoadingBar
      style={{height: '3px'}}
        color='#f11946'
        progress={progress}
      />
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<News progress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
        <Route exact path='/business' element={<News progress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
        <Route exact path='/entertainment' element={<News progress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
        <Route exact path='/general' element={<News progress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
        <Route exact path='/health' element={<News progress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
        <Route exact path='/science' element={<News progress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
        <Route exact path='/sports' element={<News progress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
        <Route exact path='/technology' element={<News progress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
      </Routes>
      </Router>
      </div>
    )
  
}

export default App

