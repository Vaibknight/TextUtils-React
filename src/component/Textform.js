import React, {useState} from 'react'



export default function Textform(props) {
    const[text,setText] = useState('Enter the text here');  

    // convert to uppercase
    const handleUpClick=()=>{
        // console.log("UpperCase"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }

    // convert to lower case
    const handlelowClick=()=>{
        // console.log("UpperCase"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick=()=>{
        // console.log("UpperCase"+text);
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text } onChange={handleChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter your text to preview here'}</p>
        </div>
    </>
  )
}
