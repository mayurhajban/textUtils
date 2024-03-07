import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#02132c'
      showAlert("Dark Mode has been Enabled", "success")
      document.title = "TextUtils-DarkMode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500); //Title chamcham krene ke liye 
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success")
      document.title = "TextUtils-LightMode"
    }
  }
  return (
    <>
      <>
        <Router>
          <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<TextForm showAlert={showAlert} textArea="Enter Your Text Here" mode={mode} />} />
            </Routes>
          </div>
        </Router>
      </>
    </>
  );
}

export default App;
