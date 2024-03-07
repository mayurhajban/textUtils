import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLwCase = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClear = () => {
        setText("")
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is copied to clipboard", "success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces are removed", "success")
    }
    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? '#02132c' : 'white' }}>
                <form>
                    <div className="form-group my-3">
                        <label htmlFor="exampleFormControlTextarea1"><h1>{props.textArea}</h1></label>
                        <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#02132c', color: props.mode === 'light' ? '#02132c' : 'white' }} onChange={handleOnChange} id="exampleFormControlTextarea1" placeholder='Please Enter Text' rows="8"></textarea>
                    </div>
                </form>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? '#02132c' : 'white' }}>
                <button className="btn btn-primary mx-2" onClick={handleUpCase} >Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLwCase} >Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >Remove Extra Spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? '#02132c' : 'white' }}>
                <h2 className='my-3'>Your Text Summary</h2>
                <p>You have written {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charecters</p>
                <p>Average Reader will read this content is {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}Min</p>
                <br />
                <h2>Text Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in above TextBox"}</p>
            </div>
        </>
    )
}
