import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../styles/preview-survey.css'
import { useNavigate,useLocation } from "react-router-dom";



export default function PreviewSurvey()
{
    const [showqQuestions, setShowQuestions] = useState([])
    //receiving data ffrom createSurvey
    let location=useLocation();
    //console.log(location.state.questions);
    useEffect(()=>{
        setShowQuestions(location.state.questions)
    },[])
    // async function fn()
    // {
    //     console.log("node");
    //     console.log(location.state);
    //     // console.log('not received');
    //console.log(location.state);
    

    async function fn()
    {
        console.log("node");
        console.log(location.state);
        // console.log('not received');

        //sending survey data to backend...............

        await fetch("http://localhost:8000/survey_data",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(location.state),
        })
        .then((data)=>data.json())
        .then((responce)=>console.log(responce))
        .catch(()=>console.log("uploading error"))

        navigate('/list-survey')

    }

    

    

    const navigate = useNavigate()
    return <>
    <div className='container dark-theme'>
        {/* <Sidebar/> */}
        <div className='sidenav dark-themesidenav'>
                <div onClick={()=>{
                    navigate('/list-survey')
                }} id='home'></div>
                <div onClick={()=>{
                    navigate('/list-survey/create')
                }} id='create'></div>
                <div onClick={()=>{
                    navigate('/register')
                }} id='list'></div>
            </div>
        <div className='list-container '>
            <header className='list-header '>
                <div id='searchform'>
                    <button onClick={()=>{
                        navigate('/list-survey/create/questions')
                    }} id='arrow'> &larr;</button>
                        <h5>Preview</h5>
                </div>
                <div className='util'>
                <div id="close-prev-btn " >
                            <button className='dark-themebutton'  onClick={()=>{
                                navigate('/list-survey/create/questions',{state: location.state})
                            }}>Close Preview</button>
                        </div>
                        <div id="save-btn " >
                            <button className='dark-themebutton'
                            onClick={fn}
                                       >Save</button>
                        </div>
                </div>
            </header>
            <div className='survey-list'>
               {/* <div className='question'>
                    <h4>Question 1</h4>
                    <div className='prev-form-container'>
                        <form>
                            <label>Question i'll be here</label>
                            <div className='radio-container'>
                                <input type="radio" />
                                <input type="radio" />
                                <input type="radio" />
                            </div>
                        </form>
                    </div>
                    
               </div> */}
             {showqQuestions.map(item=>{
                return<>
                  <div className='question'>
                    <h4 className='dark-theme' >{`Question ${item.qno}`}</h4>
                    <div className='prev-form-container'>
                        <form>
                            <label className='dark-theme'  htmlFor='question'>{item.question}</label>
                            <div id='question' className='radio-container'>
                                <div>
                                <input className='dark-theme' id='opt-1' type="radio" value={1} name='q' disabled/>
                                <label className='dark-theme' htmlFor='op1-1'>{Object.keys(item.choices)[0]}</label>
                                </div>
                                <div>
                                <input className='dark-theme' id='opt-2' type="radio" value={2} name='q' disabled />
                                <label className='dark-theme' htmlFor='op1-2'>{Object.keys(item.choices)[1]}</label>
                                </div>
                                
                                {/* <input id='opt-3' type="radio" value={3} name='q' />
                                <label htmlFor='op1-3'>Option 3</label> */}
                            </div>
                        </form>
                    </div>
                    
               </div>
                </>
             })}  
             
            </div>
            
        </div>
    </div>
</>
}