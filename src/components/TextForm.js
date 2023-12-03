import React, {useState} from 'react'

function TextForm(props) {
  const handleUpClick= ()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }

  const handleLowClick= ()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText =text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
  }

  const handleClearText= ()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText ='';
    setText(newText)
    props.showAlert("Text cleared","success");
  }

  const handleDownloadText = () => {
    const blob = new Blob([text], { type: 'text' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'textFile.txt';
    a.click();
    props.showAlert("Text downloaded","success");
  };

  const handleOnChange= (event)=> {
    // console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container ' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase</button>
          <button className='btn btn-primary mx-2' onClick={handleLowClick} >Convert to Lowercase</button>
          <button className='btn btn-primary mx-2' onClick={handleClearText} >Clear text</button>
          <button className='btn btn-primary mx-2' onClick={handleDownloadText} >Download text</button>  
    </div>
    <div className='container my-3'  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>This is Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split("").length} minutes read</p>
      <h2>Preview </h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  );
}

export default TextForm;