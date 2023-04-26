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
    const [themeToggle, setThemeToggle] = useState(false);
    
    const [listQuestions, setListQuestions] = useState([])
    // const [ondelete, setOnDelete] = useState(true)
    const {questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo} = useContext(Filecontext)
   
       
    useEffect(()=>{
        
        console.log(surveyInfo);
        setListQuestions(initialData())
        function initialData(){
            if(surveyInfo.questions === undefined || (!surveyInfo.isEdit && !(surveyInfo.questions.length > 0))){
               
                return [{
                    qno:1,
                    question: "",
                    choices: {}
                }]
            }
           return [...surveyInfo.questions]
               
        }
      console.log("object");
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
    
   
// const onDelete =(qno)=>{
//     console.log(qno);
//     console.log(listQuestions);
//     const result = [...listQuestions]
//     result.splice(qno,1)
//     console.log(result);
//     setListQuestions(result);
//     console.log(listQuestions);
// }
    const addQuestion=()=>{
        if(listQuestions.length > 0){
             ref.current.sendQ();
             setListQuestions(prevq=>([
                ...prevq,
             {
                    qno: listQuestions.length+1,
                    question: "",
                    choices: {}
                }
            ]))
        }

        else{
        setListQuestions(prevq=>([
            ...prevq,
         {
                qno: listQuestions.length+1,
                question: "",
                choices: {}
            }
        ]))
    }
        
      
       
    }
    const mergeQuestion=()=>{   
       
        
    }
    
    function mergeSurveyInfoAndQ(){
        
        location.state = {
            ...location.state,
            questions: [...mergedQuestions]
        }
        
    }
    mergeSurveyInfoAndQ()
    console.log(listQuestions);
    // console.log(location.state);
    //  console.log(mergedQuestions);
     //console.log(surveyInfo);
    
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
                            if(surveyInfo._id === undefined){
                                setSurveyInfo({...surveyInfo,isEdit: true})
                                navigate('/list-survey/create')
                            }
                            
                        }} src={left_arrow} alt="arrow" className="arrow lift" />
                        <p className="create">Create Questions</p>
                    </div>
                    <div className="rec2">
                        <button className="theme_btn" onClick={() =>{setThemeToggle(true)}}>Theme Setting</button>
                        <button onClick={() => {
                            if(surveyInfo.isEdit){
                                setSurveyInfo(prevInfo=>({
                                    ...prevInfo,
                                    questions: [...surveyInfo.questions, ...mergedQuestions]
                                }))
                            }
                            else{
                            setSurveyInfo(prevInfo=>({
                                ...prevInfo,
                                questions: [ ...mergedQuestions]
                            }))
                        }
                            navigate('/list-survey/create/questions/preview',{state:{...location.state,theme_data}}) //sending data to preview{state:{...location.state,theme_data}})
                        }} className="preview">Preview</button>
                        <button onClick={() => {
                            ref.current.sendQ();
                        }} className="save">Save</button>
                    </div>

                </div>
            </div>
            </div>
            
                {listQuestions.map((item,i) => {
                    return <Question data={item} mergeQuestion={mergeQuestion} 
                    num = {i}
                    ref = {ref}  key={i}
                    setListQuestions={setListQuestions}
                    listQuestions={listQuestions} 
                    // onDelete={onDelete}
                    />
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