import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize = 6;
  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
      <Router>
      <LoadingBar
      style={{height: '3px'}}
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<News progress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
        <Route exact path='/business' element={<News progress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business"/>}></Route>
        <Route exact path='/entertainment' element={<News progress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
        <Route exact path='/general' element={<News progress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
        <Route exact path='/health' element={<News progress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health"/>}></Route>
        <Route exact path='/science' element={<News progress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science"/>}></Route>
        <Route exact path='/sports' element={<News progress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports"/>}></Route>
        <Route exact path='/technology' element={<News progress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology"/>}></Route>
      </Routes>
      </Router>
      </div>
    )
  }
}

export default App

