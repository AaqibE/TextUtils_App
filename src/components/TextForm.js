import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log('upper case was clicked')
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "Success");
  }
  const handleOnchange = (event)=>{

    setText(event.target.value)

  }

  const handleReClick = ()=>{
    let value = ""
    setText(value)
  }
    const [text, setText] = useState('Enter the text2')
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white': '042743'}}
>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control " value={text} onChange={handleOnchange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
      <button className="btn btn-secondary mx-3" onClick={handleReClick}>Clear Text</button>
   </div >
   <div className='container my-3'style={{color: props.mode==='dark'?'white': '#042743'}}>
     <h1>Your text summary</h1>
     <p>{text.split(" ").length} words and {text.length} character </p>
     <h2>Preview</h2>
     <p>{text}</p>
   </div>
   </>
  )
}
