import React, { useState } from 'react'
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import NavBar from './Components/NavBar';
import TextB from './Components/TextB';
import './App.css';
import Alert from './Components/Alert';
let mystyle = {
  height:"100vh"
}

function App() {
  const [btnText, setbtnText] = useState("Dark Mode")
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      msg : message,
      type : type
    })
  }
    const blackmode = ()=>{
      var maindiv = document.getElementById('maindiv')
      var apptb = document.getElementById('tb')
      var tarea = document.getElementById('textt')
  if(maindiv.classList.contains('lmode')){
      maindiv.value = "dmode";
      maindiv.classList.remove('lmode');
      maindiv.classList.add('dmode');
      apptb.classList.add('tbtoggle');
      tarea.classList.remove('textarea');
      tarea.classList.add('textareadark');
      setbtnText('Light Mode')
      showAlert("Dark Mode Has Been Enabled", "Success");
    } else {
      maindiv.value = "lmode";
      maindiv.classList.remove('dmode');
      maindiv.classList.add('lmode');
      apptb.classList.remove('tbtoggle');
      tarea.classList.remove('textareadark');
      tarea.classList.add('textarea');
      setbtnText('Dark Mode')
      showAlert("Light Mode Has Been Enabled", "Success");
  }
    }
    const graymode = ()=>{
      var maindiv = document.getElementById('maindiv')
      var apptb = document.getElementById('tb')
      var tarea = document.getElementById('textt')
  if(maindiv.classList.contains('lmode' || 'dmode')){
      maindiv.value = "gmode";
      maindiv.classList.remove('lmode' || 'dmode');
      maindiv.classList.add('gmode');
      apptb.classList.add('tbtoggle');
      tarea.classList.remove('textarea');
      tarea.classList.add('textareadark');
      setbtnText('Light Mode')
      showAlert("Dark Mode Has Been Enabled", "Success");
    } else {
      maindiv.value = "lmode";
      maindiv.classList.remove('gmode');
      maindiv.classList.add('lmode');
      apptb.classList.remove('tbtoggle');
      tarea.classList.remove('textareadark');
      tarea.classList.add('textarea');
      setbtnText('Dark Mode')
      showAlert("Light Mode Has Been Enabled", "Success");
  }
    }
  
  return (
      <>

    <div className="App lmode" id='maindiv' style={mystyle}>   
    <Alert text={alert}/>
    {/* <TextB heading="Enter Text Below"/>
    <About/> */}
    {/* <Toggler/> */}
    {/* <BrowserRouter> */}
    <NavBar title="Textedit" blackmode={blackmode} graymode={graymode} btnText={btnText}/>
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
                <TextB heading="Enter Text Below"/>
          {/* </Route>
        </Switch>
    </BrowserRouter> */}
    </div>
      </>
    
  );
  
}


export default App;
