import React,{useState} from "react";
import "../styles/App.css";
import ReactMarkdown from "react-markdown";



const App= ()=>{

    const[markdown,setMarkDown] = useState("");

    return(
        <div className="app">
            <textarea className="textarea" onChange={(e)=>{setMarkDown(e.target.value)}} value={markdown}></textarea>
            <div className="preview">
                <ReactMarkdown className="loading">{markdown}</ReactMarkdown>
                
            </div>
        </div>
    )
}

export default App