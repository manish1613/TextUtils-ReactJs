import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        // console.log("ON change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("You clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("You clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClickClear = () => {
        // console.log("You clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }



    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-success bg-dark mx-1" onClick={handleUpClick}>Convert lower To Upper case</button>
                <button className="btn btn-outline-success bg-dark mx-1" onClick={handleLoClick}>Convert Upper To Lower case</button>
                <button className="btn btn-outline-success bg-dark mx-1" onClick={handleClickClear}>Clear Text</button>
                <button className="btn btn-outline-success bg-dark mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-outline-success bg-dark mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").length}</b> Words and <b>{text.length} </b> Characters</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>


        </>
    )
}
