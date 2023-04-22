import React, { useState } from "react";
import settings from "../images/gear.jpg"
import close from '../images/close-_1_.jpg'
import '../styles/addQuiz.css'

export default function Question({data}){
    const [toggle, setToggle] = useState(false)
    // const [question, setQuestion] = useState({
    //     question: "",
    //     choices: []
    // })
    // const getQuestion = (e) =>{
    //     setQuestion(prevQuestion=>({
    //         ...prevQuestion,
    //         question: `${e.target.value}`
    //     }))
    // }
    return<>
        <div className="s_parent2" >
                <div className="list">
                    <ul className="ul">
                        <li>{data.qno}</li>
                    </ul>
                </div>
                <div className="que">
                    <div>
                        <label for="que" style={{ color: "#2D2D2E" }}>Question</label><br />
                        <input type="text" id="que"  name="que" value={ data.question} className="que_input" placeholder="Enter Question" />
                    </div>
                    <div className="options">
                        <div className="que_box">
                            <input type="radio" name="option" id="option" />
                            {/* <label for="option" className="label">Option1</label> */}
                            <input type="text" value={data.choices}  className="label" />
                        </div>
                        <div className="que_box">
                            <input type="radio" name="option" id="option" />
                            {/* <label for="option" className="label">Option1</label> */}
                            <input type="text" value={data.choices}  className="label" />
                        </div>
                        <div className="que_box">
                            <input type="radio" name="option" id="option" />
                            {/* <label for="option" className="label">Option1</label> */}
                            <input type="text" value={data.choices}  className="label" />
                        </div>
                        
                    </div>
                </div>
                <div className="s_parent3">
                    <img src={settings} alt="settings" className="settings" onClick={()=>{setToggle(true)}} />
                    {toggle &&
                        <div className="float_box">
                            <div>
                                
                                <p style={{ fontSize: "12px", marginBottom: "5px" }}>Question Type</p>
                                <select className="select">
                                    <option defaultChecked disabled>Select</option>
                                    <option>Multiple Choice</option>
                                </select>
                            </div>
                            <img src={close} onClick={()=>{setToggle(false)}} alt="close" className="close_tag" />

                        </div>
                    }
                </div>
            </div>
    
    </>
}