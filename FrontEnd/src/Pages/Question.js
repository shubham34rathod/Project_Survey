import React, { forwardRef, useImperativeHandle, useState } from "react";
import settings from "../images/gear.jpg"
import close from '../images/close-_1_.jpg'
import '../styles/addQuiz.css'

const Question = forwardRef(({ data, mergeQuestion }, ref) => {
    useImperativeHandle(ref, () => ({
        sendQ() {
            mergeQuestion(question)
        }
    }));
    const [toggle, setToggle] = useState(false)
    const [choice, setChoice] = useState({})
    const [question, setQuestion] = useState({
        qno: data.qno,
        question: data.question,
        choices: data.choices
    })
    //console.log(question);
    const getQuestion = (e) => {
        setQuestion(prevQuestion => ({
            ...prevQuestion,
            question: `${e.target.value}`
        }))
       // console.log(e.target.value);
    }

    const getChoices = () => {
        setQuestion(prevChoices => ({
            ...prevChoices,
            choices: {
                ...prevChoices.choices,
                ...choice
            }
        }))
    }
    const getChoice = (e) => {
        setChoice({ [e.target.value]: false })
       // console.log(e.target.value);
    }
    return <>
        <div className="s_parent2" >
            <div className="list">
                <ul className="ul">
                    <li>{data.qno}</li>
                </ul>
            </div>
            <div className="que">
                <div>
                    <label htmlFor="que" style={{ color: "#2D2D2E" }}>Question</label><br />
                    <input type="text"  id="que" name="que" onChange={getQuestion} value={question.question} className="que_input" placeholder="Enter Question" />
                </div>
                <div className="options">
                    <div className="que_box">
                        <input type="radio" value={Object.keys(choice)[0]} name="option" id="option" />
                        {/* <label htmlFor="option" className="label">Option1</label> */}
                        <input type="text" value={Object.keys(question.choices)[0]} onChange={getChoice}  className="label" /><span hidden={(!(Object.keys(choice)[0] && true))} onClick={getChoices} className="add-q" >+</span>
                    </div>
                    <div className="que_box">
                        <input type="radio" value={Object.keys(choice)[0]} name="option" id="option" />
                        {/* <label htmlFor="option" className="label">Option1</label> */}
                        <input type="text" value={Object.keys(question.choices)[1]} onChange={getChoice} className="label" /><span hidden={!(Object.keys(choice)[0] && true)} onClick={getChoices} className="add-q">+</span>
                    </div>

                </div>
            </div>
            <div className="s_parent3">
                <img src={settings} alt="settings" className="settings" onClick={() => { setToggle(true) }} />
                {toggle &&
                    <div className="float_box">
                        <div>

                            <p style={{ fontSize: "12px", marginBottom: "5px" }}>Question Type</p>
                            <select className="select">
                                <option defaultChecked disabled>Select</option>
                                <option>Multiple Choice</option>
                            </select>
                        </div>
                        <img src={close} onClick={() => { setToggle(false) }} alt="close" className="close_tag" />

                    </div>
                }
            </div>
        </div>

    </>
});

export default Question


