import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateSurvey from '../Pages/CreateSurvey';
import SignIn from '../Pages/SignIn';
import Register from '../Pages/Register';
import SurveyList from '../Pages/SurveyList';
import PreviewSurvey from '../Pages/PreviewSurvey';

export default function AppRouter(){
    return<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='create' element={<CreateSurvey/>}/>
                <Route path='list-survey' element={<SurveyList/>}/>
                <Route path='preview' element={<PreviewSurvey/>}/>
                <Route path='*' element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    </>
}