import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert]= useState(null);

  const showAlert= (message,type) =>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark'); // Call setMode with the new value 'dark'
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","successs");
    } else {
      setMode('light'); // Call setMode with the new value 'light'
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","successs");
    }
  };
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" abouttext="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
    <Route path="/about" element={<About/>} />
    </Routes>
    <Routes>
    <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> }/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
