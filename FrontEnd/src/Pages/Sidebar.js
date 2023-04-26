import React, { useContext } from 'react'
import '../styles/header.css'
import { useNavigate } from 'react-router-dom'
import { Filecontext } from '../config/FileContext'


export default function Sidebar(){

    const navigate= useNavigate()
    const {questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo} = useContext(Filecontext)

    return<>
            <div className='sidenav'>
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
        
    </>
}