import React, { useState } from 'react'
import Alert from './Alert';
export default function TextB(props) {
    const [alert, setalert] = useState(null);
    const showAlert = (message, type)=>{
      setalert({
        msg : message,
        type : type
      })
    }
    const UpCase = ()=>{
        console.log("Uppercase is Clicked ")
        let newText = text.toUpperCase()
        setText(newText)
        showAlert("Text Transformed To Uppercase", "Success");
    }
    const LowCase = ()=>{
        console.log("Lowercase is Clicked ")
        let newText = text.toLowerCase()
        setText(newText)
        showAlert("Text Transformed To Lowercase", "Success");
    }
    const cleartext = ()=>{
        console.log("Clear is Clicked ")
        let newText = ' ';
        setText(newText)
        showAlert("Text Cleared", "Success");
    }
    const copytext = ()=>{
        console.log("Copy is Clicked ")
        let newText = document.getElementById('textt');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        showAlert("Text Copied To Clipboard", "Success");
        
    }
    
    const setOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Text Here")
  return (
    <>
    <Alert text={alert}/>
    <div className="container my-3 mx-6 p-4" id='tb'>
        <h1>{props.heading}</h1>
    <textarea className='w-100 p-2 border border-2 rounded textarea' id='textt' onChange={setOnChange} value={text} rows={8}></textarea>
    <div className="buttons my-3">
    <button disabled={text.length===0} className="btn btn-secondary" onClick={UpCase}>Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={LowCase}>Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary my-3" onClick={cleartext}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={copytext}>Copy Text</button>
    </div>
        <h2 className='my-2'>Your Text Summary</h2>
        <p className='text-secondary'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
        {/* <button className='btn btn-secondary' onClick={toggletheme}>{btnText}</button> */}
</div>
      </>
  )
}
