import React,{useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success','Converted to Uppercase');
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success','Converted to Lowercase');
    }

    const handleClearText= ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('success','Text Cleared');
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('success','Extra Spaces Removed');
    }

    const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1 style={{color: props.green==='light'?'black':'green'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'#41517a'}} value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} style={{backgroundColor: props.green==='light'?'blue':'green'}} onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
        <button disabled={text.length===0} style={{backgroundColor: props.green==='light'?'blue':'green'}} onClick={handleLoClick} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
        <button disabled={text.length===0} style={{backgroundColor: props.green==='light'?'blue':'green'}} onClick={handleClearText} className="btn btn-primary mx-2 my-2">Clear Text</button>
        <button disabled={text.length===0} style={{backgroundColor: props.green==='light'?'blue':'green'}} onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2 style={{color: props.green==='light'?'black':'green'}}>Your Text Summary</h2>
        <p style={{color: props.green==='light'?'black':'green'}}>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p style={{color: props.green==='light'?'black':'green'}}>{(text.split(' ').length - 1) * 0.0006} minutes to read</p>
        <h2 style={{color: props.green==='light'?'black':'green'}}>Preview</h2>
        <p style={{color: props.green==='light'?'black':'green'}}>{text.length<=0?'Please enter something above in the textbox to preview':text}</p>
    </div>
    </>
  )
}
