import React, { useContext, useEffect, useState } from 'react'
import Cookies from'universal-cookie'
import Sidebar from './Sidebar'
import '../styles/preview-survey.css'
import { useNavigate,useLocation } from "react-router-dom";
import { Filecontext } from '../config/FileContext';
import backEndUrl from '../config/config'





export default function PreviewSurvey()
{
    const navigate = useNavigate()

    let [th,abc]=useState([])
    let [Theme,themeFn]=useState(true)
    let [backColor,updateBackColor]=useState('#278DF1')
    let [wallColor,wallUpdate]=useState('white')
    let [closePrev,prevUpdate]=useState('white')
    let [closePrevColor,updateClosePrev]=useState('#278DF1')
    let [closePrevBorder,updatePrevBorder]=useState('1px solid #278DF1')
    let [prevColor,updatePrevColor]=useState('#081838')
    let [saveColor,saveUpdate]=useState('#278DF1')
    let [saveFontColor,saveColorUpdate]=useState('#FFFFFF')
    let [queColor,updateQueColor]=useState('#2D2D2E')
    let [FontStyle,updateFont]=useState('normal')

    const cookies=new Cookies()

    let token=cookies.get("uid")
    if(!token)
    {
        navigate('/')
    }

    const [showqQuestions, setShowQuestions] = useState([])
    const {questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo} = useContext(Filecontext)

    //receiving data ffrom createSurvey
    let location=useLocation();
    
   // console.log(location.state);
   
        
    
    // console.log(location.state.theme_data.themeName);
   
   
   
    useEffect(()=>{
        
       //setSurveyInfo({...location.state})
    console.log(surveyInfo);
        setShowQuestions(surveyInfo.questions)
        if(location.state.theme_data.themeName==='Dark')
        {
            updateBackColor('#201f1f')
            wallUpdate('#5f5d5d ')
            prevUpdate('#201f1f')
            saveUpdate('#201f1f')
            updatePrevColor('black')
            updateClosePrev('white')
            updatePrevBorder('none')
            updateQueColor('white')
        }
        updateFont(location.state.theme_data.styleName)
    },[])
    // async function fn()
    // {
    //     console.log("node");
    //     console.log(location.state);
    //     // console.log('not received');
    // console.log(location.state);
    

    async function fn()
    {
        // console.log("node");
        // console.log(location.state);
        // console.log('not received');

        //sending survey data to backend...............
        if(surveyInfo._id !== undefined){
            await fetch(`https://survey-backend-cp5k.onrender.com/update-survey`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(surveyInfo),
        })
        .then((data)=>data.json())
        .then((responce)=>console.log(responce))
        .catch(()=>console.log("uploading error"))
        console.log("sent edited");
        setSurveyInfo({})
        navigate('/list-survey')
        }

else{
        await fetch(`https://survey-backend-cp5k.onrender.com/survey_data`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(location.state),
        })
        .then((data)=>data.json())
        .then((responce)=>console.log(responce))
        .catch(()=>console.log("uploading error"))
setSurveyInfo({})
        navigate('/list-survey')
    }

    }

    

    

   
    return <>
    <div className='container dark-theme'style={{backgroundColor:wallColor}}>
        {/* <Sidebar/> */}
        <div className='sidenav dark-themesidenav' style={{backgroundColor:backColor}} >
        <acronym title="List"><div onClick={()=>{
                    navigate('/list-survey')
                }} id='home'></div></acronym>
                <acronym title="Create new Survey"><div onClick={()=>{
                    if(surveyInfo._id === undefined){
                        setSurveyInfo({...surveyInfo,isEdit: true})
                        navigate('/list-survey/create')
                    }
                }} id='create'></div></acronym>
                <acronym title="Register"><div onClick={()=>{
                    navigate('/register')
                }} id='list'></div></acronym>
            </div>
        <div className='list-container '>
            <header className='list-header '>
                <div id='searchform'>
                    <button onClick={()=>{
                        setSurveyInfo({...surveyInfo,isEdit:true})
                        navigate('/list-survey/create/questions')
                    }} id='arrow'> &larr;</button>
                        <h5 style={{color:prevColor,fontStyle:FontStyle}}>Preview</h5>
                </div>
                <div className='util'>
                <div id="close-prev-btn " >
                            <button className='dark-themebutton' style={{backgroundColor:closePrev,color:closePrevColor,border:closePrevBorder,fontStyle:FontStyle}}  onClick={()=>{
                                setSurveyInfo({...surveyInfo,isEdit:true})
                                navigate('/list-survey/create/questions',{state: location.state.questions})
                            }}>Close Preview</button>
                        </div>
                        <div id="save-btn " >
                            <button className='dark-themebutton' style={{backgroundColor:saveColor,border:"none",color:saveFontColor,fontStyle:FontStyle}}
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
             {showqQuestions.map((item,num)=>{
                return<>
                  <div className='question'>
                    <h4 className='dark-theme' style={{fontStyle:FontStyle,backgroundColor:wallColor}}>{`Question ${num+1}`}</h4>
                    <div className='prev-form-container'>
                        <form>
                            <label className='dark-theme'  htmlFor='question' style={{color:queColor,fontStyle:FontStyle}}>{item.question}</label>
                            <div id='question' className='radio-container'>
                                {
                                    Object.keys(item.choices).map((key)=>{
                                        return <>
                                        <div>
                                           <input className='dark-theme' id='opt-2' type={item.type}  name='q' disabled />
                                           <label className='dark-theme' htmlFor='op1-2'  style={{color:queColor,fontStyle:FontStyle}} >{key}</label>
                                        </div>
                                        </>
                                        
                                    })
                                }
                                {/* <div>
                                <input className='dark-theme' id='opt-2' type="radio" value={2} name='q' disabled />
                                <label className='dark-theme' htmlFor='op1-2'  style={{color:queColor,fontStyle:FontStyle}} >{Object.keys(item.choices)[1]}</label>
                                </div> */}
                                
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