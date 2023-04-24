import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Cookies from'universal-cookie'
import Sidebar from "./Sidebar";
import left_arrow from "../images/left-arrow.jpg"

import '../styles/addQuiz.css'
import { useNavigate,useLocation } from "react-router-dom";

import Theme from "./Theme";
import Question from "./Question";
import { Filecontext } from "../config/FileContext";


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
    const navigate = useNavigate();

    // let [themeData,themeUpdate]=useState({})

    let [theme_data,update]=useState({
        themeName:"",
        styleName:"",
        colorName:""
    })


    const cookies=new Cookies()

    let token=cookies.get("uid")
    if(!token)
    {
        navigate('/')
    }

    //receiving data from createSurvey
    const location=useLocation();
    const ref = useRef(null)
    const [themeToggle, setThemeToggle] = useState(false)
    const {questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo} = useContext(Filecontext)
   
    useEffect(()=>{
        console.log(location.state);
        setSurveyInfo({...location.state} )
        setQuestions(initialData())
        function initialData(){
            if(!Object.keys(surveyInfo).length || !surveyInfo.questions.length ){
                
                return [{
                        qno: 1,
                        question: "",
                    choices: {}
                }]
            }
                else{
                    
                    return [...surveyInfo.questions]
                }
               
        }
      
    setMergedQuestion([])
    }, [])

    
    
    
    //const [questions, setQuestions] = useState(initialData())
    const showTheme=()=>{
       
        setThemeToggle(false)
    }
  // console.log(surveyInfo);
    
    // console.log(theme_data);
    //console.log(location.state);
    //opacity: 0.1;
    
    
    const addQuestion=()=>{
        setQuestions(prevq=>([
            ...prevq,
            {
                qno: questions.length+1,
                question: "",
                choices: {}
            }
        ]))
        
       ref.current.sendQ();
       
    }
    const mergeQuestion=()=>{   
        setSurveyInfo(prev=>({
            ...prev,
            questions: [...mergedQuestions]
        }))
        
    }
    
    function mergeSurveyInfoAndQ(){
        
        location.state = {
            ...location.state,
            questions: [...mergedQuestions]
        }
        
    }
    mergeSurveyInfoAndQ()
    console.log(questions);
    console.log(mergedQuestions);
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
                            setSurveyInfo(prevInfo=>({
                                ...prevInfo,
                                questions: [ ...mergedQuestions]
                            }))
                            navigate('/list-survey/create/questions/preview',{state:{...location.state,theme_data}}) //sending data to preview{state:{...location.state,theme_data}})
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
                        <Theme showTheme={showTheme} update={update}></Theme>
                    </div>
                }
            </div>
            
            </div>   
    </>
}

export default AddQuiz;