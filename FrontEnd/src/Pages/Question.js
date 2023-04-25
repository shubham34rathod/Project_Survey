import React, { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import settings from "../images/gear.jpg"
import close from '../images/close-_1_.jpg'
import '../styles/addQuiz.css'
import { Filecontext } from "../config/FileContext";

const Question = forwardRef(({ data }, ref) => {
    useImperativeHandle(ref, () => ({
        sendQ() {
            
           // mergeQuestion();
            // setMergedQuestion(prevQs=>([
            //     ...prevQs,
            //     question
            // ]))
            setSurveyInfo(prev=>({
                ...prev,
                questions:[...[].push(question)]
            }))
        
        }
    }));
    
    const [toggle, setToggle] = useState(false)
    const [choice, setChoice] = useState({})
    const {questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo} = useContext(Filecontext)

    const [question, setQuestion] = useState({
        qno: data.qno,
        question: data.question,
        choices: data.choices
    })
    console.log(question);
    const getQuestion = (e) => {
        setQuestion(prevQuestion => ({
            ...prevQuestion,
            question: `${e.target.value}`
        }))
       // console.log(e.target.value);
    }
    console.log(data);
const deleteQuestion=(data)=>{
    // console.log("delete");
    // console.log(questions);
    // console.log(mergedQuestions);
   let result =  mergedQuestions.filter((item)=> item.qno !== data.qno)
    //setQuestions({...mergedQuestions})
    console.log(result);
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
                    <li>{question.qno}</li>
                </ul>
            </div>
            <div className="que">
                <div>
                    <label htmlFor="que" style={{ color: "#2D2D2E" }}>Question</label><br /> 
                    <input type="text"  id="que" name="que" onChange={(e)=>{getQuestion(e)}} value={data.question} className="que_input" placeholder="Enter Question" /> <span onClick={()=>{deleteQuestion(data)}} id="op-delete">DELETE</span>
                </div>
                <div className="options">
                    <div className="que_box">
                        <input type="radio" value={Object.keys(question.choices)[0]} name="option" id="option" />
                        {/* <label htmlFor="option" className="label">Option1</label> */}
                        <input type="text" value={Object.keys(question.choices)[0]} onChange={(e)=>{getChoice(e)}}  className="label" /><span hidden={(!(Object.keys(choice) && true))} onClick={()=>{getChoices()}} className="add-q" >+</span>
                    </div>
                    <div className="que_box">
                        <input type="radio" value={Object.keys(data.choices)[1]} name="option" id="option" />
                        {/* <label htmlFor="option" className="label">Option1</label> */}
                        <input type="text" value={Object.keys(question.choices)[1]} onChange={(e)=>{getChoice(e)}} className="label" /><span hidden={!(Object.keys(choice) && true)} onClick={()=>{getChoices()}} className="add-q">+</span>
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
                {/* <button id="addOption">Add Option</button> */}
            </div>
        </div>

    </>
});

export default Question


