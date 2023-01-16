
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
// import About  from './component/About';
import React, {useState} from 'react';
import Alert from './component/Alert';
// import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');

const [gre, newGre] = useState('light');

const[alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg:message,
    type: type
  })

  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor  ='gray';
    document.body.style.color  ='white';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextUtils - Dark Mode';
    setInterval(() => {
      document.title = 'Vaibhav';
    }, 2000);

    setInterval(() => {
      document.title = 'Tiwari';
    }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor  ='white';
    document.body.style.color  ='#212529';
    showAlert("Light mode has been enabled","success");
    document.title = 'TextUtils - Light Mode';
  }

  

}

const togggleMode = ()=>{

  if(gre === 'light'){
    newGre('dark')
    document.body.style.backgroundColor = 'dark';
  }
  else{
    newGre('light')
    document.body.style.backgroundColor = 'white';
  }
}

  return (
    <>
      
      
      
      

      {/* <BrowserRouter> */}
      <Navbar  title="TextUtils" mode={mode} gre={gre} togggleMode={togggleMode} toggleMode={toggleMode}  aboutText="About"/>
        <Alert alert={alert}/>
        <div className="container my-3">
            {/* <Routes> */}

            {/* <Route exact path="/" element={}/> */}

            <Textform showAlert={showAlert} heading="Enter the text to analyze below"/>
            {/* <Route exact path="/About" element={<About/>}/> */}
              
                
            {/* </Routes> */}
          </div>
        {/* </BrowserRouter> */}
    </>
  );
}

export default App;
