
import './App.css';
import CreateSurvey from './Pages/CreateSurvey';
import Header from './Pages/Header';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register'
import SurveyList from './Pages/SurveyList';
import Sidebar from './Pages/Sidebar';
import AddQuiz from './Pages/AddQuiz';
import AppRouter from './router/AppRouter';
import { useEffect, useState } from 'react';
import { Filecontext } from './config/FileContext';
function App() {
  const [questions, setQuestions] = useState([])
  const [mergedQuestions, setMergedQuestion] = useState([])
  const [surveyInfo, setSurveyInfo] = useState({})
  useEffect(()=>{console.log("App mount");})
  return (
    
    <div className="App">
      <Filecontext.Provider value={{questions, setQuestions, mergedQuestions, setMergedQuestion, surveyInfo, setSurveyInfo}}>
         <AppRouter/>
      </Filecontext.Provider>
      {/* <Header/> */}
      {/* <Sidebar></Sidebar> */}
      {/* <SurveyList/> */}
      {/* <SignIn></SignIn> */}
      {/* <Register></Register> */}
      {/* <CreateSurvey/> */}
      {/* <AddQuiz></AddQuiz> */}
    </div>
  );
}

export default App;
