import React, { useEffect, useState } from 'react'
import Cookies from'universal-cookie'
import Sidebar from './Sidebar'
import '../styles/preview-survey.css'
import { useNavigate,useLocation } from "react-router-dom";




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

    const cookies=new Cookies()

    let token=cookies.get("uid")
    if(!token)
    {
        navigate('/')
    }

    const [showqQuestions, setShowQuestions] = useState([])
    //receiving data ffrom createSurvey
    let location=useLocation();
    console.log(location.state);
    console.log(location.state.theme_data);
    
    // console.log(location.state.theme_data.themeName);
   
   
   
    useEffect(()=>{
        setShowQuestions(location.state.questions)
        if(location.state.theme_data.themeName==='Dark')
        {
            updateBackColor('#201f1f')
            wallUpdate('#5f5d5d ')
            prevUpdate('#201f1f')
            saveUpdate('#201f1f')
            updatePrevColor('black')
            updateClosePrev('white')
            updatePrevBorder('none')
        }
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

    

    

   
    return <>
    <div className='container dark-theme'style={{backgroundColor:wallColor}}>
        {/* <Sidebar/> */}
        <div className='sidenav dark-themesidenav' style={{backgroundColor:backColor}} >
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
                        <h5 style={{color:prevColor}}>Preview</h5>
                </div>
                <div className='util'>
                <div id="close-prev-btn " >
                            <button className='dark-themebutton' style={{backgroundColor:closePrev,color:closePrevColor,border:closePrevBorder}}  onClick={()=>{
                                navigate('/list-survey/create/questions',{state: location.state})
                            }}>Close Preview</button>
                        </div>
                        <div id="save-btn " >
                            <button className='dark-themebutton' style={{backgroundColor:saveColor,border:"none",color:saveFontColor}}
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