import React, { useContext, useEffect } from 'react';
import '../styles/survey.css'
import { useNavigate } from 'react-router-dom';
import { Filecontext } from '../config/FileContext';
import backEndUrl from '../config/config'

export default function Survey({data}) {
    const navigate = useNavigate()
    const {questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo} = useContext(Filecontext)
const {name, description, typeOfSurvey, startDate, endDate} = data
useEffect(()=>{
    setSurveyInfo({})
}, [])
async function fn()
{
    let obj={
        _id:data._id
    }
    // console.log(obj);
    await fetch(`https://survey-backend-cp5k.onrender.com/delete_survey`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj),
    })
    .then((data)=>data.json())
    .then((responce)=>{
        console.log(responce)
        if(responce==='delete successfull')
        {
            navigate('/list-survey/create')
        }
        // window.location.reload(true)    
    })
    .catch(()=>console.log("uploading error"))
    
}

    return <>
        <tr className='list-sur'>
            <td>{name}</td>
            <td>{description}</td>
            <td>{typeOfSurvey}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>
                <div className='action'>
                    <div onClick={()=>{
                        setSurveyInfo({...data,isEdit: true})
                        navigate('/list-survey/create/questions',{state: {...data,isEdit: true}})
                    }} id='edit'></div>
                    <div id='delete' onClick={fn}></div>
                </div>
            </td>
        </tr>

    </>
}