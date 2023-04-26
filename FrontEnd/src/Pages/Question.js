import React, { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import settings from "../images/gear.jpg"
import close from '../images/close-_1_.jpg'
import '../styles/addQuiz.css'
import { Filecontext } from "../config/FileContext";

const Question = forwardRef(({ data, mergeQuestion}, ref) => {
    useImperativeHandle(ref, () => ({
        sendQ() {

            mergeQuestion();
            if(surveyInfo.isEdit){
                mergedQuestions.pop()
                setMergedQuestion(prevQs=>([
                    ...prevQs,
                    question
                ]))
            }
            else{
            setMergedQuestion(prevQs=>([
                ...prevQs,
                question
            ]))}
           

        }
    }));

    const [toggle, setToggle] = useState(false)
    const [queType,updateQueType]=useState(true)
    const [choice, setChoice] = useState({})
    const { questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo } = useContext(Filecontext)

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

    // const getChoices = () => {
    //     setQuestion(prevChoices => ({
    //         ...prevChoices,
    //         choices:{...prevChoices,
    //            options[options.length-1]:false
    //         }
    //     }))
    // }
    const getChoice = (e) => {
        setChoice({ [e.target.value]: false })
        // console.log(e.target.value);
    }

    // .....................
    const [options, setOptions] = useState(Object.keys(question.choices));
    // const [options, setOptions] = useState([]);
    const handleOptionChange = (e, index) => {
        getChoice(e)
        const updatedOptions = [...options];
        updatedOptions[index] = e.target.value;
        setOptions(updatedOptions);
        // console.log(choice);
        // console.log(Object.assign({},options));
    };
    const addOption = (e) => {
        // getChoices(e)
        setOptions([...options, ""]);
        // console.log( question.choices);
    };

    const getChoices = () => {
        setQuestion(prevChoices => ({
            ...prevChoices,
            choices: {
                ...prevChoices.choices,
                [options[options.length - 1]]: false
            }
        }))
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
                    <input type="text" id="que" name="que" onChange={(e) => { getQuestion(e) }} value={question.question} className="que_input" placeholder="Enter Question" />{/*  <span id="op-delete">DELETE</span> */}
                </div>
                  <div className="options">
                    {options.map((option, index) => (
                        <div key={index}>
                            <input type="radio" value={Object.keys(choice)[0]} name="option" id="option" />
                            <input
                                type="text"
                                value={option}
                                className="label"
                                //  style={{border:"1px solid green",margin:"5px"}}
                                onChange={(e) => handleOptionChange(e, index)}
                            /> 
                            <span hidden={(!(Object.keys(choice)[0] && true))} onClick={getChoices} className="add-q" >+</span>
                        </div>
                    ))}

                  </div>
                {/* <label htmlFor="options">Options:</label> */}

                <button onClick={addOption} className="addOption">Add Option</button>
            </div>
            {/* <div className="options">
                    <div className="que_box">
                        <input type="radio" value={Object.keys(choice)[0]} name="option" id="option" /> */}
            {/* <label htmlFor="option" className="label">Option1</label> */}
            {/* <input type="text" value={Object.keys(question.choices)[0]} onChange={getChoice}  className="label" /><span hidden={(!(Object.keys(choice)[0] && true))} onClick={getChoices} className="add-q" >+</span>
                    </div>
                    <div className="que_box">
                        <input type="radio" value={Object.keys(choice)[0]} name="option" id="option" /> */}
            {/* <label htmlFor="option" className="label">Option1</label> */}
            {/* <input type="text" value={Object.keys(question.choices)[1]} onChange={getChoice} className="label" /><span hidden={!(Object.keys(choice)[0] && true)} onClick={getChoices} className="add-q">+</span>
                    </div>
                   
                </div> */}
                <div className="s_parent3">
        <img src={settings} alt="settings" className="settings" onClick={() => { setToggle(true) }} />

            {toggle &&
                <div className="float_box">
                    <div>

                        <p style={{ fontSize: "12px", marginBottom: "5px" }}>Question Type</p>
                        <select className="select">
                            <option defaultChecked disabled>Select</option>
                            <option>Multiple Choice</option>
                            <option>Descriptive</option>
                        </select>
                    </div>
                    <img src={close} onClick={() => { setToggle(false) }} alt="close" className="close_tag" />

                </div>
            }

            {/* new addition....... */}
            {/* <div className="addQue">
                     <label htmlFor="options">Options:</label>
                    {options.map((option, index) => (
                    <div key={index}>
                    <input
                     type="text"
                     value={option}
                     style={{border:"1px solid green",margin:"5px"}}
                     onChange={(e) => handleOptionChange(e, index)}
                    />
                    </div>
                ))}
                   <button onClick={addOption}>Add Option</button>
                </div> */}
            {/* ................ */}
            {/* <button id="addOption">Add Option</button> */}
        </div>

        </div>

        
    
    </>
});

export default Question


