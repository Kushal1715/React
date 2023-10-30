import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [green,setGreen] = useState('light');

  const toggleGreenMode = ()=>{
    if(green==='light'){
      setGreen('green');
      document.body.style.backgroundColor = '#a7f7a7';
      showAlert('success','Green mode is enabled');
    }
    else{
      setGreen('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success','Green mode is disabled');
    }
  }

  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#41517a';
      showAlert('success','Dark Mode is enabled');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success','Dark Mode is disabled');
    }
  }

  const [alert,setAlert] = useState(null);

  const showAlert = (type,message)=>{
    setAlert({type:type,
              msg: message})
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} green={green}/>} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
