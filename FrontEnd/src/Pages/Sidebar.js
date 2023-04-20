import React from 'react'
import '../styles/header.css'
import { useNavigate } from 'react-router-dom'


export default function Sidebar(){

    const navigate= useNavigate()
    return<>
            <div className='sidenav'>
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
        
    </>
}