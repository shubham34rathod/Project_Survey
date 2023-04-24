import React, { useContext, useEffect } from 'react';
import '../styles/survey.css'
import { useNavigate } from 'react-router-dom';
import { Filecontext } from '../config/FileContext';
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
    console.log(obj);
    await fetch("http://localhost:8000/delete_survey",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj),
    })
    .then((data)=>data.json())
    .then((responce)=>console.log(responce))
    .catch(()=>console.log("uploading error"))
}

    return <>
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>{typeOfSurvey}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td>
                <div className='action'>
                    <div onClick={()=>{
                        
                        setSurveyInfo(data)
                        navigate('/list-survey/create/questions',{state: {dataFromSurvey: data}})
                    }} id='edit'></div>
                    <div id='delete' onClick={fn}></div>
                </div>
            </td>
        </tr>

    </>
}