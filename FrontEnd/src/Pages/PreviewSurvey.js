import React from 'react'
import Sidebar from './Sidebar'
import '../styles/preview-survey.css'
import { useNavigate } from "react-router-dom";


export default function PreviewSurvey(){
    const navigate = useNavigate()
    return <>
    <div className='container'>
        <Sidebar />
        <div className='list-container'>
            <header className='list-header '>
                <div id='searchform'>
                    <button onClick={()=>{
                        navigate('/list-survey/create/questions')
                    }} id='arrow'> &larr;</button>
                        <h5>Preview</h5>
                </div>
                <div className='util'>
                <div id="close-prev-btn">
                            <button onClick={()=>{
                                navigate('/list-survey/create/questions')
                            }}>Close Preview</button>
                        </div>
                        <div id="save-btn">
                            <button>Save</button>
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
               <div className='question'>
                    <h4>Question 1</h4>
                    <div className='prev-form-container'>
                        <form>
                            <label htmlFor='question'>Question i'll be here</label>
                            <div id='question' className='radio-container'>
                                <input id='opt-1' type="radio" value={1} name='q'/>
                                <label htmlFor='op1-1'>Option 1</label>
                                <input id='opt-2' type="radio" value={2} name='q' />
                                <label htmlFor='op1-2'>Option 2</label>
                                <input id='opt-3' type="radio" value={3} name='q' />
                                <label htmlFor='op1-3'>Option 3</label>
                            </div>
                        </form>
                    </div>
                    
               </div>
            </div>
            
        </div>
    </div>
</>
}