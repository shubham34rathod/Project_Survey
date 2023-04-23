import React, { useRef, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import left_arrow from "../images/left-arrow.jpg"

import '../styles/addQuiz.css'
import { useNavigate,useLocation } from "react-router-dom";

import Theme from "./Theme";
import Question from "./Question";


// let questions1 = [{
//     qno: 1,
//     question: "Your name?",
//     choices: "op1"
// },
// {
//     qno: 1,
//     question: "Your name?",
//     choices: "op1"
// },
// {
//     qno: 1,
//     question: "Your name?",
//     choices: "op1"
// },
// {
//     qno: 1,
//     question: "Your name?",
//     choices: "op1"
// }]



    
function AddQuiz() 
{
    //receiving data from createSurvey
    const location=useLocation();
    const ref = useRef(null)
    const [themeToggle, setThemeToggle] = useState(false)
    
    const [mergedQuestions, setMergedQuestion] = useState([])
    const [questions, setQuestions] = useState(initialData())
    const showTheme=()=>{
        setThemeToggle(false)
    }
    
    //console.log(location.state);
    //opacity: 0.1;
    
    function initialData(){
        if(location.state.dataFromSurvey === undefined || !location.state.dataFromSurvey.questions.length ){
            
            return [{
                    qno: 1,
                    question: "",
                choices: {}
            }]
        }
            else{
                
                return [...location.state.dataFromSurvey.questions]
            }
        
    }
    const addQuestion=()=>{
        setQuestions(prevq=>([
            ...prevq,
            {
                qno: questions.length+1,
                question: "",
                choices: ""
            }
        ]))
        ref.current.sendQ();
    }
    const mergeQuestion=(questionFromQ)=>{
        setMergedQuestion(prevQs=>([
            ...prevQs,
            {...questionFromQ}
        ]))
        location.state.dataFromSurvey.questions = [...mergedQuestions]
        location.state.dataFromSurvey.questions = [...mergedQuestions]
    }
   
    
    console.log(location.state);
    function mergeSurveyInfoAndQ(){
        location.state = {
            ...location.state,
            questions: [...mergedQuestions]
        }
        
    }
    // console.log(location.state);
    mergeSurveyInfoAndQ()
    
    const navigate = useNavigate();
    
    return <>
    <div className="add-q-container">
        <Header></Header>
        <Sidebar></Sidebar>
        
            
           <div className="create-question">
            <div>
           <div className="s_parent1">
                <div className="s_child1">
                    <div className="rec1">
                        <img onClick={() => {
                            navigate('/list-survey/create')
                        }} src={left_arrow} alt="arrow" className="arrow lift" />
                        <p className="create">Create Questions</p>
                    </div>
                    <div className="rec2">
                        <button className="theme_btn" onClick={() =>{setThemeToggle(true)}}>Theme Setting</button>
                        <button onClick={() => {
                            navigate('/list-survey/create/questions/preview',{state:location.state}) //sending data to preview
                        }} className="preview">Preview</button>
                        <button onClick={() => {
                            ref.current.sendQ();
                        }} className="save">Save</button>
                    </div>

                </div>
            </div>
            </div>
            
                {questions.map((item,i) => {
                    return <Question data={item} mergeQuestion={mergeQuestion} ref = {ref}  key={i} />
                })}
                <button onClick={addQuestion} className="add_que">Add question</button>
            
           </div>
            
           <div style={{ position: "fixed", bottom: "100px", left: "500px" }}>
                {themeToggle &&
                    <div className="popup">
                        <Theme showTheme={showTheme}></Theme>
                    </div>
                }
            </div>
            
            </div>   
    </>
}

export default AddQuiz;